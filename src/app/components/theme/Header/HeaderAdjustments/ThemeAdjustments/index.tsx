import { Button } from "@/app/components/ui/Button";
import { useTheme } from "@/app/hooks/useTheme";
import { THEME_COLORS } from "@/app/hooks/useTheme/ThemeColor/constants.d";
import { cn } from "@/app/utils/cn";
import { MdArrowBack } from "react-icons/md";

type ThemeAdjustmentsProps = {
  setModalCategory: (category: null) => void;
  className?: string;
};

const ThemeAdjustments = ({
  setModalCategory,
  className,
}: ThemeAdjustmentsProps) => {
  const { themeColor, setThemeColor } = useTheme();
  const availableColors = THEME_COLORS;
  type ThemeColorType = (typeof THEME_COLORS)[number];

  const TEMA_COLORS: Record<string, string> = {
    light: "Claro",
    dark: "Escuro",
    cream: "Creme",
  };

  return (
    <div
      className={cn(
        "bg-theme-background absolute top-10 right-0 rounded-lg rounded-tr-none p-4 shadow-sm shadow-slate-300 lg:top-12 lg:w-[600px] lg:p-6",
        className,
      )}
    >
      <header className="mb-8 flex items-center justify-center lg:mb-8">
        <Button
          variant="ghost"
          onClick={() => setModalCategory(null)}
          className="absolute top-2 left-0"
        >
          <MdArrowBack className="text-secondary size-5" />
        </Button>
        <h3 className="text-primary text-sm font-semibold uppercase lg:text-base">
          Tema de leitura
        </h3>
      </header>
      <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
        <div className="flex w-full gap-2">
          {availableColors.map((color) => (
            <button
              key={color}
              onClick={() => setThemeColor(color as ThemeColorType)}
              className={`w-full flex-1 cursor-pointer rounded-lg p-4 ${
                themeColor === color ? "ring-secondary ring-3" : ""
              } ${
                color === "light"
                  ? "bg-white"
                  : color === "dark"
                    ? "bg-slate-900"
                    : color === "cream"
                      ? "bg-amber-100"
                      : ""
              }`}
            >
              <span
                className={`text-xl font-bold ${
                  color === "light"
                    ? "text-slate-900"
                    : color === "dark"
                      ? "text-white"
                      : color === "cream"
                        ? "text-amber-900"
                        : ""
                }`}
              >
                aA
              </span>
            </button>
          ))}
        </div>

        <p className="text-theme text-sm">
          Você selecionou o tema{" "}
          <span className="font-bold">{TEMA_COLORS[themeColor]}</span>
        </p>
      </div>
    </div>
  );
};

export { ThemeAdjustments };
