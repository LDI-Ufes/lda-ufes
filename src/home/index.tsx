import { HomeBanner } from "@/app/components/layout/Home/HomeBanner";
import { HomePage } from "@/app/components/layout/Home/HomePage";
import { HomeSummary } from "@/app/components/layout/Home/HomeSummary";
import Catalog from "@/app/components/theme/Catalog";
import { Container } from "@/app/components/ui/Container";

const Home = () => {
  return (
    <>
      <HomePage title="Modelo de Livro Acessível Digital">
        <HomeBanner
          title="Modelo de Livro Acessível Digital"
          year="2025"
          cover=""
          authors={[
            { name: "Prof. Dr. Rafael de Queiroz" },
            { name: "Prof. Dr. Josimar Ribeiro" },
            { name: "Profa. Dra. Rosângela C. Barthus" },
          ]}
        />

        <Container className="my-14 flex flex-col gap-14 lg:mt-28 lg:gap-28">
          <HomeSummary />
          <Catalog>
            <Catalog.Header>
              <Catalog.Paragraph>
                Dados Internacionais de Catalogação-na-publicação (CIP)
              </Catalog.Paragraph>
              <Catalog.Paragraph>
                (Biblioteca Central da Universidade Federal do Espírito Santo,
                ES, Brasil)
              </Catalog.Paragraph>
            </Catalog.Header>

            <Catalog.Content>
              <Catalog.Author>Ferreira, Rafael de Queiroz.</Catalog.Author>
              <Catalog.Code>F383q</Catalog.Code>
              <Catalog.WorkDetails>
                <Catalog.Paragraph>
                  Química ambiental [recurso eletrônico] / Rafael de Queiroz
                  Ferreira, Josimar Ribeiro, Rosângela C. Barthus. - Dados
                  eletrônicos. - 3. ed. - Vitória : Universidade Federal do
                  Espírito Santo, Secretaria de Ensino a Distância, 2023.
                  <br />1 recurso online (não paginado). : il.
                </Catalog.Paragraph>
                <br />
                <Catalog.Paragraph>Inclui bibliografia.</Catalog.Paragraph>
                <Catalog.Paragraph>ISBN: 978-65-994410-7-3</Catalog.Paragraph>
                <Catalog.Paragraph>
                  Modo de acesso:
                  <a
                    href="http://acervo.sead.ufes.br/materiais/quimica-ambiental"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {" "}
                    http://acervo.sead.ufes.br/materiais/quimica-ambiental
                  </a>
                </Catalog.Paragraph>
                <br />
                <Catalog.Paragraph>
                  1. Química ambiental. I. Ribeiro, Josimar. II. Barthus,
                  Rosângela C. III. Título.
                </Catalog.Paragraph>
                <Catalog.Paragraph className="text-right">
                  CDU: 54
                </Catalog.Paragraph>
              </Catalog.WorkDetails>
            </Catalog.Content>

            <Catalog.Footer>
              <Catalog.Paragraph>
                Elaborado por Adriana T. Caetano – CRB-6 ES-000827/O
              </Catalog.Paragraph>
            </Catalog.Footer>
          </Catalog>
        </Container>
      </HomePage>
    </>
  );
};

export { Home };
