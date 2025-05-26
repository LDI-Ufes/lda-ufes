import { useSearch } from "@/app/hooks";
import { Link, useSearchParams } from "react-router-dom";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const queryParamTerm = searchParams.get("q") || "";

  const { results, isLoading } = useSearch(queryParamTerm);

  return (
    <div className="mx-auto w-full">
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
        <p className="text-base md:text-lg lg:text-lg">
          Resultados encontrados para:{" "}
          <span className="text-primary font-bold">{queryParamTerm}</span>
        </p>
        {results.length > 0 && !isLoading ? (
          <p className="text-theme text-sm md:text-base lg:text-lg">
            {results.length} ocorrências encontradas
          </p>
        ) : (
          <p className="text-theme text-sm md:text-base lg:text-lg">
            Nenhum resultado encontrado
          </p>
        )}
      </div>

      <div className="mt-10 md:mt-14 lg:mt-16">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative h-16 w-16">
              <div className="border-primary absolute h-16 w-16 animate-spin rounded-full border-4 border-solid border-t-transparent"></div>
            </div>
            <p className="text-lg text-gray-600">Buscando no livro...</p>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-4 lg:space-y-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 border-b-2 border-slate-300 pb-8"
              >
                <h3 className="text-primary text-2xl font-bold">
                  {result.title}
                </h3>
                <Link
                  to={`/${result.path}`}
                  className="text-theme mt-2 px-6 text-sm hover:underline md:text-base lg:text-lg"
                >
                  {result.excerpt
                    .split(new RegExp(`(${queryParamTerm})`, "gi"))
                    .map((part, i) =>
                      queryParamTerm &&
                      part.toLowerCase() === queryParamTerm.toLowerCase() ? (
                        <mark key={i} className="bg-yellow-200 font-bold">
                          {part}
                        </mark>
                      ) : (
                        part
                      ),
                    )}
                </Link>
              </div>
            ))}
          </div>
        ) : !queryParamTerm && !isLoading ? (
          <p className="text-center text-gray-500">
            Nenhum resultado encontrado
          </p>
        ) : null}
      </div>
    </div>
  );
};
