import {
  HomeBanner,
  HomePage,
  HomeSummary,
} from "@/app/components/layout/Home";
import { Catalog } from "@/app/components/theme/Catalog";
import { Container } from "@/app/components/ui";

const Home = () => {
  return (
    <>
      <HomePage title="Modelo de Livro Acessível Digital">
        <HomeBanner
          title="Modelo de Livro Acessível Digital"
          year="2025"
          cover="/covers/image.svg"
          authors={[
            { name: "Nome do autor 1" },
            { name: "Nome do autor 2" },
            { name: "Nome do autor 3" },
          ]}
          presentation="Este é um modelo de Livro Digital Acessível (LDA), desenvolvido pelo Laboratório de Design Instrucional (LDI) da Universidade Federal do Espírito Santo (UFES). O objetivo deste projeto é fornecer um template flexível e acessível para a criação de livros digitais, seguindo as diretrizes de acessibilidade e usabilidade."
        />

        <Container className="my-14 flex flex-col gap-14 lg:mt-28 lg:gap-28">
          <HomeSummary />
          <Catalog>
            <Catalog.Header>
              <Catalog.Paragraph>
                Dados Internacionais de Catalogação na Publicação (CIP)
              </Catalog.Paragraph>
              <Catalog.Paragraph>
                (Nome da Biblioteca, Sigla da Instituição, País)
              </Catalog.Paragraph>
            </Catalog.Header>

            <Catalog.Content>
              <Catalog.Author>Sobrenome, Nome do Autor.</Catalog.Author>
              <Catalog.Code>Código da Obra (Ex: XXXXX)</Catalog.Code>
              <Catalog.WorkDetails>
                <Catalog.Paragraph>
                  Título da obra [recurso eletrônico] / Nome do Autor Sobrenome,
                  Nome do Autor Sobrenome. - Dados eletrônicos. - Edição. -
                  Cidade : Nome da Instituição, Ano.
                  <br />
                  Descrição do recurso (ex: X recurso online (não paginado). :
                  il.).
                </Catalog.Paragraph>
                <br />
                <Catalog.Paragraph>Inclui bibliografia.</Catalog.Paragraph>
                <Catalog.Paragraph>ISBN: XXX-XX-XXXXXX-X-X</Catalog.Paragraph>
                <Catalog.Paragraph>
                  Modo de acesso:
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {" "}
                    Link para o recurso online
                  </a>
                </Catalog.Paragraph>
                <br />
                <Catalog.Paragraph>
                  1. Assunto Principal. I. Sobrenome, Nome do Colaborador. II.
                  Sobrenome, Nome do Colaborador. III. Título.
                </Catalog.Paragraph>
                <Catalog.Paragraph className="text-right">
                  CDU: XXX
                </Catalog.Paragraph>
              </Catalog.WorkDetails>
            </Catalog.Content>

            <Catalog.Footer>
              <Catalog.Paragraph>
                Elaborado por Nome do Bibliotecário – CRB-X XX-XXXXXX/X
              </Catalog.Paragraph>
            </Catalog.Footer>
          </Catalog>
        </Container>
      </HomePage>
    </>
  );
};

export { Home };
