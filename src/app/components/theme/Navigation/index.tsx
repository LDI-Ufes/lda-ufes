import { Link, useLocation } from "react-router-dom";
import { Pagination } from "@/app/router/routes";
import { UGetPageByPagination } from "@/app/utils";
import { Button } from "../../ui/Button";
import { MdArrowBack, MdArrowForward, MdHomeFilled } from "react-icons/md";

export const Navigation = () => {
  const location = useLocation();

  const currentIndex = Pagination.findIndex(
    (capitulo) =>
      UGetPageByPagination(capitulo.page)?.path === location.pathname.slice(1),
  );

  const prevCapitulo = currentIndex > 0 ? Pagination[currentIndex - 1] : null;
  const nextCapitulo =
    currentIndex < Pagination.length - 1 ? Pagination[currentIndex + 1] : null;

  const pageInicial = currentIndex === 0 ? "/" : null;

  return (
    <div className="mx-auto mt-8 flex justify-center gap-10 space-y-2">
      {pageInicial && (
        <Button variant="secondary" asChild>
          <Link to="/" className="">
            <MdHomeFilled />
            <span className="max-md:sr-only">Página</span> inicial
          </Link>
        </Button>
      )}

      {prevCapitulo && (
        <Button variant="secondary" asChild>
          <Link to={`/${UGetPageByPagination(prevCapitulo.page)?.path}`}>
            <MdArrowBack />
            <span className="max-md:sr-only">Capítulo</span> anterior
          </Link>
        </Button>
      )}
      {nextCapitulo && (
        <Button variant="secondary" asChild>
          <Link to={`/${UGetPageByPagination(nextCapitulo.page)?.path}`}>
            <span className="max-md:sr-only">Próximo</span> capítulo
            <MdArrowForward />
          </Link>
        </Button>
      )}
    </div>
  );
};
