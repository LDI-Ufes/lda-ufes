import { Search } from "@/app/search/Search";
import { Layout } from "@/components/layout/Layout";

const Pesquisa = () => {
  return (
    <Layout
      titulo="Pesquisa"
      subtitulo="Pesquise em todo o conteúdo do livro"
      sumario={false}
    >
      <Search />
    </Layout>
  );
};

export default Pesquisa;
