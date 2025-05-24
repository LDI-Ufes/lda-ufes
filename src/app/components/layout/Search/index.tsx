import { SearchContainer } from "./SearchContainer";
import { Page } from "@/app/components/layout";

const Search = () => {
  return (
    <Page
      title="Pesquisa"
      subtitle="Pesquise em todo o conteúdo do livro"
      hasSummary={false}
    >
      <SearchContainer />
    </Page>
  );
};

export { Search };
