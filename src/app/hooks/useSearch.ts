import { useState, useEffect } from "react";
import { sanitizeContent, UGetPageByPagination } from "@/app/utils";

interface SearchResult {
  title: string | undefined;
  excerpt: string;
  path: string | undefined;
}

const searchContent = async (searchTerm: string): Promise<SearchResult[]> => {
  if (!searchTerm.trim()) return [];

  const contentModules = import.meta.glob(["/src/pages/*.mdx"], {
    eager: true,
    import: "default",
    query: "raw",
  });

  const results: SearchResult[] = [];

  for (const [path, content] of Object.entries(contentModules)) {
    try {
      if (typeof content !== "string") {
        console.warn(`Conteúdo em ${path} não é uma string válida`);
        continue;
      }

      const textContent = sanitizeContent(content);
      console.log("textContent", textContent);

      if (textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
        const title = path.split("/").pop()?.replace(".mdx", "") || "";

        const excerpt = textContent;

        results.push({
          title: UGetPageByPagination(title)?.title,
          excerpt,
          path: UGetPageByPagination(title)?.path,
        });
      }
    } catch (error) {
      console.error(`Erro ao processar ${path}:`, error);
    }
  }

  return results;
};

export const useSearch = (searchTerm: string) => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const performSearch = async () => {
      setIsLoading(true);
      try {
        const searchResults = await searchContent(searchTerm);
        setResults(searchResults);
      } catch (error) {
        console.error("Erro na pesquisa:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      performSearch();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  return { results, isLoading };
};
