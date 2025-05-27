import { cn } from "@/app/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import { FiSearch } from "react-icons/fi";

const SummarySearch = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  return (
    <div className={cn("relative flex w-full", className)}>
      <input
        type="text"
        placeholder="Buscar"
        className="focus:secondary bg-theme-background h-10 w-full flex-1 rounded-xl border-2 border-slate-300 p-4 focus:border-transparent focus:ring-2 lg:h-12"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="ghost"
        className="absolute top-0 right-0 border-none max-lg:border-transparent lg:top-0 lg:right-0"
        onClick={
          value
            ? (e) => {
                e.preventDefault();
                navigate(`/pesquisa?q=${value}`);
              }
            : undefined
        }
      >
        <FiSearch
          className={cn(
            "max-lg:text-secondary size-5 lg:text-slate-500",
            value && "lg:text-secondary",
          )}
        />
      </Button>
    </div>
  );
};

export { SummarySearch };
