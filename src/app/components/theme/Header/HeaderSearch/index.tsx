import { Button } from "@/app/components/ui/Button";
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
          "hidden h-10 w-full rounded-lg border-2 border-gray-300 p-4 focus:border-transparent focus:ring-2 focus:ring-blue-500 lg:block",
          className,
        )}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="secondary"
        className="lg:absolute lg:top-0 lg:right-0 lg:border-none"
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
