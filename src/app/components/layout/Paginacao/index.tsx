import { Link, useLocation } from "react-router-dom";
import { Paginacao } from "@/settings/Paginacao";

export const Navegacao = () => {
  const location = useLocation();

  const currentIndex = Paginacao.findIndex(
    (capitulo) =>
      capitulo.page.toLowerCase() === location.pathname.slice(1).toLowerCase(),
  );

  console.log(currentIndex);

  const prevCapitulo = currentIndex > 0 ? Paginacao[currentIndex - 1] : null;
  const nextCapitulo =
    currentIndex < Paginacao.length - 1 ? Paginacao[currentIndex + 1] : null;

  console.log(prevCapitulo, nextCapitulo);

  return (
    <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col space-y-2">
      {prevCapitulo && (
        <Link
          to={`/${prevCapitulo.page.toLowerCase()}`}
          className="flex items-center rounded bg-gray-100 p-2 text-sm text-gray-700 hover:bg-gray-200"
        >
          <span className="mr-2">←</span>
          {prevCapitulo.title}
        </Link>
      )}
      {nextCapitulo && (
        <Link
          to={`/${nextCapitulo.page.toLowerCase()}`}
          className="flex items-center rounded bg-gray-100 p-2 text-sm text-gray-700 hover:bg-gray-200"
        >
          {nextCapitulo.title}
          <span className="ml-2">→</span>
        </Link>
      )}
    </div>
  );
};
