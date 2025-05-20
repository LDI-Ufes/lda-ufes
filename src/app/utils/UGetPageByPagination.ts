import { Paginacao } from "@/settings/Paginacao";

export const UGetPageByPagination = (title: string) => {
  let pathURL: { path: string; title: string } | undefined;

  Paginacao.map((page) => {
    if (page.page === title) {
      pathURL = { path: page.page.toLowerCase(), title: page.title };
    }
  });
  return pathURL;
};
