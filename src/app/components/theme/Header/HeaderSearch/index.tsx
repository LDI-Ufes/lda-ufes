import { Button } from "@/app/components/ui/Button";
import { cn } from "@/app/utils";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const HeaderSearch = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);

  const handleSearch = () => {
    if (value.trim()) {
      navigate(`/pesquisa?q=${value}`);
      setIsMobileSearchVisible(false);
    }
  };

  return (
    <>
      <div className={cn("relative ml-auto lg:ml-0", className)}>
        <input
          type="text"
          placeholder="Buscar"
          className="hidden h-10 w-full flex-1 rounded-lg border-2 border-slate-400 p-4 focus:border-transparent focus:ring-2 focus:ring-blue-500 lg:block lg:h-12 lg:w-sm"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <Button
          variant="ghost"
          className="max-lg:border-transparent lg:absolute lg:top-0 lg:right-0 lg:border-none"
          onClick={
            value
              ? (e) => {
                  e.preventDefault();
                  handleSearch();
                }
              : undefined
          }
        >
          <FiSearch
            className={cn(
              "max-lg:text-secondary size-5 lg:text-slate-500",
              value && window.innerWidth >= 1024 && "text-secondary",
              isMobileSearchVisible && "text-secondary",
            )}
          />
        </Button>
      </div>

      {isMobileSearchVisible && (
        <div className="bg-theme-background absolute top-full left-0 z-20 w-full p-4 shadow-md lg:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar"
              className="h-10 w-full flex-1 rounded-lg border-2 border-slate-400 p-4 pr-12 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              autoFocus
            />
            <Button
              variant="ghost"
              className="absolute top-0 right-0 h-full border-none px-3"
              onClick={
                value
                  ? (e) => {
                      e.preventDefault();
                      handleSearch();
                    }
                  : undefined
              }
            >
              <FiSearch
                className={cn(
                  "size-5 text-slate-500",
                  value && "text-secondary",
                )}
              />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export { HeaderSearch };
