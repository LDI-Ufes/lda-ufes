import { Page } from "@/app/components/layout";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

const Search = () => {
  return (
    <Page
      title="Pesquisa"
      subtitle="Pesquise em todo o conteúdo do livro"
      hasSummary={false}
    >
      <SearchInput />
      <SearchResults />
    </Page>
  );
};

export { Search };
