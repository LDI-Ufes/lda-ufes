import { Link, useLocation } from "react-router-dom";
import { Pagination } from "@/app/router/pagination";
import { UGetPageByPagination } from "@/app/utils";

export const Navigation = () => {
  const location = useLocation();

  const currentIndex = Pagination.findIndex(
    (capitulo) =>
      UGetPageByPagination(capitulo.page)?.path === location.pathname.slice(1),
  );

  const prevCapitulo = currentIndex > 0 ? Pagination[currentIndex - 1] : null;
  const nextCapitulo =
    currentIndex < Pagination.length - 1 ? Pagination[currentIndex + 1] : null;

  return (
    <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col space-y-2">
      {prevCapitulo && (
        <Link
          to={`/${UGetPageByPagination(prevCapitulo.page)?.path}`}
          className="flex items-center rounded bg-gray-100 p-2 text-sm text-gray-700 hover:bg-gray-200"
        >
          <span className="mr-2">←</span>
          {prevCapitulo.title}
        </Link>
      )}
      {nextCapitulo && (
        <Link
          to={`/${UGetPageByPagination(nextCapitulo.page)?.path}`}
          className="flex items-center rounded bg-gray-100 p-2 text-sm text-gray-700 hover:bg-gray-200"
        >
          {nextCapitulo.title}
          <span className="ml-2">→</span>
        </Link>
      )}
    </div>
  );
};
