import { Button } from "@/app/components/ui/Button";
import { MdAdd, MdRemove } from "react-icons/md";
import { useTheme } from "@/app/hooks/useTheme";
import { FONT_SIZE_VALUES } from "@/app/hooks/useTheme/ThemeFontSize/constants.d";

const HeaderAdjustments = () => {
  const {
    themeColor,
    setThemeColor,
    colorsDisabled,
    setColorsDisabled,
    fontSize,
    setFontSize,
  } = useTheme();

  return (
    <div>
      <div className="flex gap-2">
        <Button
          variant="secondary"
          onClick={() => setThemeColor("light")}
          className={themeColor === "light" ? "bg-primary text-white" : ""}
        >
          Claro
        </Button>
        <Button
          variant="secondary"
          onClick={() => setThemeColor("dark")}
          className={themeColor === "dark" ? "bg-primary text-white" : ""}
        >
          Escuro
        </Button>
        <Button
          variant="secondary"
          onClick={() => setThemeColor("cream")}
          className={themeColor === "cream" ? "bg-primary text-white" : ""}
        >
          Creme
        </Button>
        <Button
          variant="secondary"
          onClick={() => setColorsDisabled(!colorsDisabled)}
          className={colorsDisabled ? "bg-primary text-white" : ""}
        >
          Alto Contraste
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            const currentSize = fontSize;
            const sizes = FONT_SIZE_VALUES.map((size) => size);
            const nextSize =
              sizes.find((size) => size > currentSize) || sizes[0];
            setFontSize(nextSize);
          }}
        >
          <MdAdd />
        </Button>

        <Button
          variant="secondary"
          onClick={() => {
            const currentSize = fontSize;
            const sizes = FONT_SIZE_VALUES.map((size) => size);
            const prevSize =
              sizes.reverse().find((size) => size < currentSize) ||
              sizes[sizes.length - 1];
            setFontSize(prevSize);
          }}
        >
          <MdRemove />
        </Button>
      </div>
    </div>
  );
};

export { HeaderAdjustments };
