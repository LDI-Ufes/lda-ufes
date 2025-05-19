import { Link, useLocation } from "react-router-dom";
import { SettingsCapitulos } from "@/settings/ConfigCapitulos";

export const Navegacao = () => {
  const location = useLocation();

  const currentIndex = SettingsCapitulos.findIndex(
    (capitulo) => capitulo.path === location.pathname,
  );

  const prevCapitulo =
    currentIndex > 0 ? SettingsCapitulos[currentIndex - 1] : null;
  const nextCapitulo =
    currentIndex < SettingsCapitulos.length - 1
      ? SettingsCapitulos[currentIndex + 1]
      : null;

  return (
    <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col space-y-2">
      {prevCapitulo && (
        <Link
          to={prevCapitulo.path}
          className="flex items-center rounded bg-gray-100 p-2 text-sm text-gray-700 hover:bg-gray-200"
        >
          <span className="mr-2">←</span>
          {prevCapitulo.title}
        </Link>
      )}
      {nextCapitulo && (
        <Link
          to={nextCapitulo.path}
          className="flex items-center rounded bg-gray-100 p-2 text-sm text-gray-700 hover:bg-gray-200"
        >
          {nextCapitulo.title}
          <span className="ml-2">→</span>
        </Link>
      )}
    </div>
  );
};
