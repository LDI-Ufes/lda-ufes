import { useState, useEffect } from "react";
import type { BaseColors } from "./types.d";

export function useBaseColorsFromCSS(): {
  baseColors: BaseColors | null;
  areBaseColorsLoaded: boolean;
} {
  const [baseColors, setBaseColors] = useState<BaseColors | null>(null);
  const [areBaseColorsLoaded, setAreBaseColorsLoaded] = useState(false);

  useEffect(() => {
    const rootStyle = window.getComputedStyle(document.documentElement);
    const primaryBase = rootStyle
      .getPropertyValue("--color-primary-base")
      .trim();
    const secondaryBase = rootStyle
      .getPropertyValue("--color-secondary-base")
      .trim();
    const textBase = rootStyle.getPropertyValue("--color-text-base").trim();
    const backgroundBase = rootStyle
      .getPropertyValue("--color-background-base")
      .trim();

    if (primaryBase && secondaryBase && textBase && backgroundBase) {
      setBaseColors({
        primary: primaryBase,
        secondary: secondaryBase,
        text: textBase,
        background: backgroundBase,
      });
    } else {
      console.error(
        "Não foi possível ler as cores base do CSS. Verifique se as variáveis --color-*-base estão definidas no :root ou @theme.",
      );
      setBaseColors({
        primary: "#00605f",
        secondary: "#ab2020",
        text: "#161616",
        background: "#ffffff",
      });
    }
    setAreBaseColorsLoaded(true);
  }, []);

  return { baseColors, areBaseColorsLoaded };
}
