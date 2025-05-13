import { Cabecalho } from "../app/components/layout/Cabecalho";
import { Conteudo } from "../app/components/layout/Conteudo";
import { Rodape } from "../app/components/layout/Rodape";
import { TituloNavegacao } from "../app/components/settings/TituloNavegacao";

const Inicio = () => {
  return (
    <TituloNavegacao titulo="LDA - Modelo de Livro Acessível Digital">
      <Cabecalho
        subtitulo="Bem-vindo ao modelo de livro acessível digital."
        titulo="LDA - Modelo de Livro Acessível Digital"
      />
      <Conteudo>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">
            Bem-vindo ao modelo de livro acessível digital.
          </h1>
          <p className="text-gray-600">
            Este é um modelo de livro acessível digital que utiliza a tecnologia
            de leitura acessível para tornar o conteúdo mais acessível para
            todos os usuários.
          </p>
        </div>
      </Conteudo>
      <Rodape />
    </TituloNavegacao>
  );
};

export default Inicio;
