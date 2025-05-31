# Descrição

O projeto do Livro Digital Acessível (LDA) é uma iniciativa do Laboratório de Design Instrucional (LDI), vinculado à Superintendência de Educação a Distância (SEAD) da Universidade Federal do Espírito Santo (UFES), financiado pela CAPES através do edital Inova EAD 2023.

Seu principal objetivo é oferecer uma experiência tecnológica que simplifique o processo de aprendizado e facilite a criação de recursos educacionais abertos de forma gratuita.

# Tabela de Conteúdos

- [Descrição](#descrição)
- [Stack Tecnológica](#stack-tecnológica)
- [Qualidade de Código e Padronização](#qualidade-de-código-e-padronização)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Estrutura de Páginas](#estrutura-de-páginas)
- [Configuração e Execução do Projeto](#configuração-e-execução-do-projeto)
- [Autores](#autores)
- [Licença](#licença)

# Stack Tecnológica

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite:** Ferramenta de build e desenvolvimento rápido para projetos web modernos.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS:** Framework CSS utilitário para estilização rápida.
- **MDX:** Permite usar componentes JSX em arquivos Markdown.

# Qualidade de Código e Padronização

- **ESLint:** Ferramenta de linting para JavaScript e TypeScript.
- **Prettier:** Formatador de código automático.
- **Husky:** Gerenciamento de git hooks para garantir a qualidade do código antes de commits/pushes (ex: rodar linters e testes).
- **Lint Staged:** Permite rodar linters/formatadores apenas nos arquivos modificados que estão prestes a serem commitados.

# Inicialização do Husky (Importante para evitar commits com erros)

O Husky é uma ferramenta essencial para garantir a qualidade do código através de git hooks. Para inicializar o Husky no projeto, siga os passos:

2. **Inicialização do Husky:**
   ```bash
   npx husky init
   ```

# Estrutura de Pastas

| Pasta     | Descrição                                  |
| --------- | ------------------------------------------ |
| `/app`    | Core do projeto (mantida pelo repositório) |
| `/home`   | Página inicial                             |
| `/pages`  | Arquivos das páginas em .mdx               |
| `/public` | Imagens e arquivos                         |
| `/fonts`  | Fontes do projeto                          |
| `/styles` | Folhas de estilo                           |

# Estrutura de Páginas

O MDX é uma extensão do Markdown que permite incorporar componentes React diretamente nos arquivos de conteúdo. No nosso projeto, utilizamos o MDX para criar páginas dinâmicas onde podemos misturar conteúdo em Markdown com componentes React interativos.

| Tipo de Arquivo        | Descrição                                                         |
| ---------------------- | ----------------------------------------------------------------- |
| `{nome-da-pagina}.mdx` | Arquivos de conteúdo que combinam Markdown com componentes React. |

O frontmatter (a seção entre `---` no início do arquivo) é uma característica do MDX que nos permite definir metadados para cada página, como título, ordem e template, que são utilizados para configurar a apresentação e estrutura do capítulo no livro digital.

| Propriedade | Descrição                                                                                           |
| ----------- | --------------------------------------------------------------------------------------------------- |
| `order`     | Define a ordem de exibição do capítulo no sumário. Neste caso, é o primeiro capítulo (1).           |
| `template`  | Especifica o template a ser usado para renderizar o conteúdo. Valores possíveis: `chapter`, `page`. |
| `title`     | Define o título principal do capítulo que será exibido na página.                                   |
| `subtitle`  | Fornece um subtítulo ou descrição adicional para o capítulo.                                        |
| `cover`     | Especifica o caminho para a imagem de capa do capítulo. O diretorio é `./public/covers/`.           |

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

    Após executar o comando de build, os arquivos otimizados para produção serão gerados na pasta `dist`. Para visualizar a versão de produção localmente, você pode usar um servidor estático como o `serve`:

5.  **Para rodar o linter:**
    ```bash
    npm run lint
    # ou
    # yarn lint
    ```

# Autores

Este projeto é uma nova versão de um produto concebido e desenvolvido originalmente pela equipe do Laboratório de Design Instrucional (LDI/SEAD/UFES).

# Licença

Este projeto é distribuído sob a licença MIT.
