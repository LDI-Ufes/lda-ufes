import { PesquisaContainer } from "./PesquisaContainer";
import { Pagina } from "@/components/layout";

const Pesquisa = () => {
  return (
    <Pagina
      titulo="Pesquisa"
      subtitulo="Pesquise em todo o conteúdo do livro"
      sumario={false}
    >
      <PesquisaContainer />
    </Pagina>
  );
};

export { Pesquisa };
