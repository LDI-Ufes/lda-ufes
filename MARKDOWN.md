# Livro Digital Acessível - Detalhes da Implementação MDX

## Processamento de Frontmatter e Renderização de Páginas MDX

Esta seção detalha como os arquivos MDX são processados para extrair metadados (frontmatter) e como eles são renderizados dinamicamente na aplicação.

### 1. Configuração do Vite para MDX e Frontmatter

No arquivo `vite.config.ts`, utilizamos os seguintes plugins Remark para processar arquivos `.mdx`:

- `remark-frontmatter`: Para parsear o bloco YAML no início dos arquivos MDX.
- `remark-mdx-frontmatter`: Para exportar os dados do frontmatter parseado como uma variável nomeada (configurada como `frontmatter`) do módulo MDX.

Exemplo de configuração:

```javascript
// vite.config.ts
// ...
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
// ...
export default defineConfig({
  // ...
  plugins: [
    react(),
    mdx({
      remarkPlugins: [
        [remarkFrontmatter, { type: "yaml", marker: "-" }],
        [remarkMdxFrontmatter, { name: "frontmatter" }],
      ],
    }),
  ],
  // ...
});
```

### 2. Estrutura de Componentes para Renderização MDX

O sistema de renderização de páginas MDX envolve os seguintes componentes principais:

- **`LazyMDXPage.tsx` (`src/app/components/layout/LazyMDXPage.tsx`)**:

  - Responsável por carregar dinamicamente um módulo MDX com base em uma prop `pageName`.
  - Ele importa tanto o conteúdo principal (default export) quanto a constante `frontmatter` (named export) do arquivo MDX especificado.
  - Utiliza um `useEffect` para carregar o módulo assincronamente e gerencia estados de carregamento e erro.
  - Envolve o conteúdo MDX carregado (o `default export`) com o `MDXWrapper`, passando o `frontmatter` extraído como prop.

- **`MDXWrapper.tsx` (`src/app/components/layout/Markdown/MDXWrapper.tsx`)**:

  - Recebe o conteúdo MDX (`children`) e o objeto `frontmatter` como props (de `LazyMDXPage`).
  - Gerencia o `title` e `subtitle` (derivados do `frontmatter`) em seu estado e os fornece através do `MDXContext`.
  - Utiliza o hook `useTituloNavegacao` para atualizar o título da navegação (ex: aba do navegador).
  - Renderiza o componente `Markdown`, passando o `frontmatter` e o conteúdo MDX.
  - Foi tornado resiliente a props `frontmatter` indefinidas, usando valores padrão (strings vazias) para `title` e `subtitle`.

- **`Markdown/index.tsx` (`src/app/components/layout/Markdown/index.tsx`)**:

  - Recebe `children` (o conteúdo MDX) e `frontmatter` do `MDXWrapper`.
  - Utiliza o componente `Pagina` para estruturar o layout da página, passando `title` e `subtitle` do `frontmatter`.
  - A prop `sumario` do componente `Pagina` é explicitamente definida como `false` aqui para evitar a renderização de um sumário interno de `Pagina`, permitindo um controle mais centralizado do sumário se necessário.
  - Envolve o `children` (conteúdo MDX) com o componente `Conteudo`.

- **`Pagina/index.tsx` (`src/app/components/layout/Pagina/index.tsx`)**:

  - Componente de layout principal para uma página individual, renderizando `Cabecalho`, `TituloNavegacao`, `Conteudo` (que recebe o MDX), `Sumario` (controlado pela prop `sumario`), e `Rodape`.

- **`Conteudo/index.tsx` (`src/app/components/theme/Conteudo/index.tsx`)**:
  - Anteriormente usava uma tag `<main>`, foi alterado para `<div>` para evitar aninhamento inválido de tags `<main>`.
  - Renderiza os `children` (o conteúdo MDX) e o componente `Navegacao` (para links de paginação entre capítulos/seções).

### 3. Roteamento Dinâmico de Páginas MDX

No `router/index.tsx` (`src/app/router/index.tsx`):

- As rotas para as páginas MDX são geradas dinamicamente a partir de uma configuração (ex: `Paginacao.ts`).
- Cada rota MDX renderiza o componente `<LazyMDXPage pageName={route.page} />`.
- Isso delega o carregamento do módulo MDX (incluindo seu `frontmatter`) para `LazyMDXPage`, garantindo que o `frontmatter` esteja disponível para o `MDXWrapper` e subsequentes componentes de layout.
- O `Suspense` do React é usado no `Router` para lidar com o estado de carregamento durante a importação dinâmica.

### 4. Provedor de Componentes MDX (`MDXProviderWrapper` e `useMDXComponents`)

- **`MDXProviderWrapper.tsx` (`src/app/providers/MDXProvider.tsx`)**:

  - Utiliza o `MDXProvider` de `@mdx-js/react` para permitir a substituição de elementos HTML padrão ou o fornecimento de componentes customizados (shortcodes) dentro do conteúdo MDX.
  - Usa o hook `useMDXComponents` para definir esses componentes.

- **`useMDXComponents.tsx` (`src/app/hooks/useMDXComponents.tsx`)**:
  - Define os componentes que o `MDXProvider` usará. Isso inclui:
    - Componentes `Title` e `Subtitle` (que não renderizam nada visualmente, mas usam `MDXContext` para definir o título e subtítulo da página a partir de tags customizadas no MDX, se usadas).
    - Outros componentes customizados passados (ex: `Button`).
  - **Resolução de Duplicação de Layout**: A propriedade `wrapper` neste hook estava anteriormente definida como `MDXWrapper`. Isso causava uma renderização recursiva/aninhada de toda a estrutura de layout da página (`MDXWrapper` -> `Markdown` -> `Pagina`), pois o `MDXProvider` tentava envolver o conteúdo MDX (que já estava sendo colocado em um layout de página por `LazyMDXPage`) com outra instância de `MDXWrapper`. A remoção de `wrapper: MDXWrapper` deste hook resolveu o problema de duplicação do layout.

### Fluxo de Dados do Frontmatter:

1.  Arquivo `.mdx` (ex: `src/pages/capitulo1.mdx`) define o frontmatter.
2.  Plugins do Vite (`remark-frontmatter`, `remark-mdx-frontmatter`) processam o MDX e tornam o `frontmatter` disponível como uma exportação nomeada.
3.  `LazyMDXPage.tsx` importa dinamicamente o módulo `.mdx` (tanto o `default` export quanto o `frontmatter` export).
4.  `LazyMDXPage.tsx` passa o `frontmatter` importado como prop para `MDXWrapper.tsx`.
5.  `MDXWrapper.tsx` usa o `frontmatter` para definir o título e subtítulo no `MDXContext` e os passa para `Markdown/index.tsx`.
6.  `Markdown/index.tsx` usa o `frontmatter` para popular o componente `Pagina`.

Este setup permite que metadados definidos nos arquivos MDX sejam usados para configurar o layout e o contexto da página correspondente de forma eficiente e sem duplicação de layout.
