import { Button } from "@/app/components/ui/Button";
import { cn } from "@/app/utils";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const HeaderSearch = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  return (
    <div className={cn("relative ml-auto lg:ml-0", className)}>
      <input
        type="text"
        placeholder="Buscar"
        className="hidden h-10 w-full flex-1 rounded-lg border-2 border-slate-400 p-4 focus:border-transparent focus:ring-2 focus:ring-blue-500 lg:block lg:h-12 lg:w-sm"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="ghost"
        className="max-lg:border-transparent lg:absolute lg:top-0 lg:right-0 lg:border-none"
        onClick={(e) => {
          e.preventDefault();
          navigate(`/pesquisa?q=${value}`);
        }}
      >
        <FiSearch
          className={cn(
            "max-lg:text-secondary size-5 lg:text-slate-500",
            value && "text-secondary",
          )}
        />
      </Button>
    </div>
  );
};

export { HeaderSearch };
