import { useState } from "react";

import { useSearch } from "@/app/hooks";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/app/utils";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export const SearchInput = ({ placeholder, className }: SearchInputProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParamTerm = searchParams.get("q") || "";
  const [inputValue, setInputValue] = useState(queryParamTerm);
  const { isLoading } = useSearch(queryParamTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (inputValue) {
        setSearchParams(new URLSearchParams({ q: inputValue }), {
          replace: true,
        });
      } else {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete("q");
        setSearchParams(newSearchParams, { replace: true });
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, setSearchParams, searchParams]);

  useEffect(() => {
    if (queryParamTerm !== inputValue) {
      setInputValue(queryParamTerm);
    }
  }, [queryParamTerm, inputValue]);

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "focus:ring-secondary h-12 w-full rounded-lg border p-4 focus:border-transparent focus:ring-4",
          className,
        )}
      />
      {isLoading && (
        <div className="absolute top-1/2 right-4 -translate-y-1/2 transform">
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};
