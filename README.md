# Descrição

O projeto do Livro Digital Acessível (LDA) é uma iniciativa do Laboratório de Design Instrucional (LDI), vinculado à Superintendência de Educação a Distância (SEAD) da Universidade Federal do Espírito Santo (UFES).

Seu principal objetivo é oferecer uma experiência tecnológica que simplifique o processo de aprendizado e facilite a criação de recursos educacionais abertos de forma gratuita.

# Tabela de Conteúdos

- [Descrição](#descrição)
- [Stack Tecnológica](#stack-tecnológica)
- [Bibliotecas Importantes](#bibliotecas-importantes)
- [Qualidade de Código e Padronização](#qualidade-de-código-e-padronização)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Configuração e Execução do Projeto](#configuração-e-execução-do-projeto)

# Stack Tecnológica

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite:** Ferramenta de build e desenvolvimento rápido para projetos web modernos.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS:** Framework CSS utilitário para estilização rápida.
- **MDX:** Permite usar componentes JSX em arquivos Markdown.

# Bibliotecas Importantes

- **@mdx-js/react e @mdx-js/rollup:** Para suporte a MDX.
- **@radix-ui/react-dialog e @radix-ui/react-slot:** Componentes UI acessíveis e personalizáveis.
- **react-router-dom:** Para gerenciamento de rotas na aplicação.
- **jsdom:** Para simular um ambiente DOM em Node.js.
- **react-icons:** Pacote de ícones populares.
- **class-variance-authority, clsx, tailwind-merge:** Utilitários para classes CSS com Tailwind CSS.
- **remark-frontmatter, remark-mdx-frontmatter:** Para processar metadados em arquivos Markdown/MDX.
- **striptags:** Para remover tags HTML de strings.
- **vite-tsconfig-paths:** Para resolver caminhos de importação definidos no `tsconfig.json` com o Vite.

# Qualidade de Código e Padronização

- **ESLint:** Ferramenta de linting para JavaScript e TypeScript.
- **Prettier:** Formatador de código automático.
- **Husky:** Gerenciamento de git hooks para garantir a qualidade do código antes de commits/pushes (ex: rodar linters e testes).
- **lint-staged:** Permite rodar linters/formatadores apenas nos arquivos modificados que estão prestes a serem commitados.

# Estrutura de Pastas

- `/app` (Core do projeto - não mexa)
- `/home` (Página inicial)
- `/pages` (Arquivos das páginas em .mdx)
- `/public` (Imagens e arquivos)

# Configuração e Execução do Projeto

Siga os passos abaixo para configurar e executar o projeto localmente:

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd lda-react
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    # yarn install
    ```

3.  **Execute o projeto em modo de desenvolvimento:**

    ```bash
    npm run dev
    # ou
    # yarn dev
    ```

    Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no terminal) no seu navegador para ver a aplicação.

4.  **Para build de produção:**

    ```bash
    npm run build
    # ou
    # yarn build
    ```

5.  **Para rodar o linter:**
    ```bash
    npm run lint
    # ou
    # yarn lint
    ```
