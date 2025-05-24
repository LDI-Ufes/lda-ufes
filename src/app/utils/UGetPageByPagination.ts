import { Pagination } from "@/app/router/routes";

export const UGetPageByPagination = (title: string) => {
  let pathURL: { path: string; title: string } | undefined;

  Pagination.map((page) => {
    if (page.page === title) {
      pathURL = { path: page.page.toLowerCase(), title: page.title };
    }
  });
  return pathURL;
};
