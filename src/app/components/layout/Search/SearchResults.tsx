import { useSearch } from "@/app/hooks";
import { Link, useSearchParams } from "react-router-dom";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const queryParamTerm = searchParams.get("q") || "";

  const { results, isLoading } = useSearch(queryParamTerm);

  return (
    <div className="mx-auto w-full max-w-2xl p-4">
      <div className="mt-4">
        {results.length > 0 ? (
          <div className="space-y-4">
            {results.map((result, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
              >
                <h3 className="text-lg font-semibold">{result.title}</h3>
                <p className="mt-2 text-gray-600">
                  {result.excerpt
                    .split(new RegExp(`(${queryParamTerm})`, "gi"))
                    .map((part, i) =>
                      queryParamTerm &&
                      part.toLowerCase() === queryParamTerm.toLowerCase() ? (
                        <mark key={i} className="bg-yellow-200">
                          {part}
                        </mark>
                      ) : (
                        part
                      ),
                    )}
                </p>
                {result.path && (
                  <Link
                    to={`/${result.path}`}
                    className="mt-2 text-sm text-blue-500"
                  >
                    Acessar página
                  </Link>
                )}
              </div>
            ))}
          </div>
        ) : queryParamTerm && !isLoading ? (
          <p className="text-center text-gray-500">
            Nenhum resultado encontrado para "{queryParamTerm}"
          </p>
        ) : null}
      </div>
    </div>
  );
};
