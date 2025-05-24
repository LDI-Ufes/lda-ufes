import { useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { Link } from "react-router-dom";

export const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { results, isLoading } = useSearch(searchTerm);

  return (
    <div className="mx-auto w-full max-w-2xl p-4">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite para pesquisar..."
          className="w-full rounded-lg border border-gray-300 p-4 focus:border-transparent focus:ring-2 focus:ring-blue-500"
        />
        {isLoading && (
          <div className="absolute top-1/2 right-4 -translate-y-1/2 transform">
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>

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
                    .split(new RegExp(`(${searchTerm})`, "gi"))
                    .map((part, i) =>
                      part.toLowerCase() === searchTerm.toLowerCase() ? (
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
        ) : searchTerm && !isLoading ? (
          <p className="text-center text-gray-500">
            Nenhum resultado encontrado
          </p>
        ) : null}
      </div>
    </div>
  );
};
