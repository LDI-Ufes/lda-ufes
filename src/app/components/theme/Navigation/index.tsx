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

  const prevChapter = currentIndex > 0 ? Pagination[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < Pagination.length - 1 ? Pagination[currentIndex + 1] : null;

  const isFirstChapter = currentIndex === 0;
  const isLastChapter = currentIndex === Pagination.length - 1;

  return (
    <div className="mx-auto mt-8 flex justify-center gap-10 space-y-2 md:mt-14 lg:mt-20">
      {isFirstChapter && (
        <Button variant="secondary" asChild>
          <Link to="/" className="">
            <MdHomeFilled />
            <span className="max-md:sr-only">Página inicial</span>
          </Link>
        </Button>
      )}

      {prevChapter && (
        <Button variant="secondary" asChild>
          <Link to={`/${UGetPageByPagination(prevChapter.page)?.path}`}>
            <MdArrowBack />
            <span className="max-md:sr-only">Capítulo</span> anterior
          </Link>
        </Button>
      )}
      {nextChapter && (
        <Button variant="secondary" asChild>
          <Link to={`/${UGetPageByPagination(nextChapter.page)?.path}`}>
            <span className="max-md:sr-only">Próximo</span> capítulo
            <MdArrowForward />
          </Link>
        </Button>
      )}

      {isLastChapter && (
        <Button variant="secondary" asChild>
          <Link to="/" className="">
            <MdHomeFilled />
            <span className="max-md:sr-only">Página inicial</span>
          </Link>
        </Button>
      )}
    </div>
  );
};
