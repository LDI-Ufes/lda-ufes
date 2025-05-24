import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/utils";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const HeaderSearch = ({ className }: { className: string }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Pesquisar..."
        className={cn(
          "w-full rounded-lg border border-gray-300 p-4 focus:border-transparent focus:ring-2 focus:ring-blue-500",
          className,
        )}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-0 right-0"
        onClick={(e) => {
          e.preventDefault();
          navigate(`/pesquisa?q=${value}`);
        }}
      >
        <FiSearch className="text-gray-400" />
      </Button>
    </div>
  );
};

export { HeaderSearch };
