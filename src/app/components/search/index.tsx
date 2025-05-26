import { Footer, Header } from "@/app/components/theme";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";
import { ContainerInner } from "../ui/Container";
import { ButtonToTop } from "../theme/ButtonToTop";

const Search = () => {
  return (
    <>
      <Header
        title="Busque em todo livro"
        subtitle="Livro Digital"
        hasSearch={false}
        hasSummary={true}
        hasProgress={false}
      />
      <main className="text-theme-text relative mx-auto mt-24 min-h-[80dvh] max-w-7xl flex-1 justify-between gap-8 px-5 py-5 lg:mt-40 lg:py-16">
        <ContainerInner className="flex max-w-4xl flex-col gap-12">
          <SearchInput placeholder="Buscar" />
          <SearchResults />
        </ContainerInner>
      </main>
      <Footer />
      <ButtonToTop />
    </>
  );
};

export { Search };
