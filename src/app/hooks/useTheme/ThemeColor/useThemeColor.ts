import { useEffect, useCallback } from "react";
import type { ThemeState } from "../theme";
import { USER_PREFERENCES_KEYS } from "@/app/data/UserPreferences";
import type { CalculatedThemeColors } from "./types.d";
import { usePersistentThemeName } from "./usePersistentThemeName";
import { useBaseColorsFromCSS } from "./useBaseColorsFromCSS";
import { applyThemeStyles } from "./applyThemeStyles";
import { calculateDynamicThemeColors } from "./calculateDynamicThemeColors";

export function useThemeColor() {
  const [themeColorName, setThemeColorName] = usePersistentThemeName();
  const { baseColors, areBaseColorsLoaded } = useBaseColorsFromCSS();

  const updateTheme = useCallback(
    (name: ThemeState["themeColor"]) => {
      if (!areBaseColorsLoaded || !baseColors) return;

      let calculatedColors: CalculatedThemeColors;

      if (name === "light") {
        calculatedColors = {
          primary: baseColors.primary,
          secondary: baseColors.secondary,
          theme: baseColors.text,
          themeBackground: baseColors.background,
        };
      } else if (name === "dark" || name === "cream") {
        calculatedColors = calculateDynamicThemeColors(name, baseColors);
      } else {
        console.warn(`Nome de tema inválido ou não tratado: ${name}`);
        return;
      }
      applyThemeStyles(calculatedColors, name);
    },
    [areBaseColorsLoaded, baseColors],
  );

  useEffect(() => {
    const savedCalculatedColorsJSON = localStorage.getItem(
      USER_PREFERENCES_KEYS.THEME_CALCULATED_COLORS,
    );
    if (
      savedCalculatedColorsJSON &&
      themeColorName &&
      themeColorName !== "light"
    ) {
      try {
        const savedColors = JSON.parse(
          savedCalculatedColorsJSON,
        ) as CalculatedThemeColors;
        applyThemeStyles(savedColors, themeColorName);
      } catch (e) {
        console.error(
          "Erro no parse de cores calculadas do localStorage na carga inicial, recalculando...",
          e,
        );
        localStorage.removeItem(USER_PREFERENCES_KEYS.THEME_CALCULATED_COLORS);
        if (
          themeColorName &&
          (themeColorName === "dark" || themeColorName === "cream")
        ) {
          updateTheme(themeColorName);
        }
      }
    } else if (themeColorName === "light") {
      updateTheme("light");
    }
  }, [areBaseColorsLoaded, themeColorName, baseColors, updateTheme]);

  useEffect(() => {
    if (themeColorName && areBaseColorsLoaded) {
      updateTheme(themeColorName);
    }
  }, [themeColorName, areBaseColorsLoaded, updateTheme]);

  const setTheme = useCallback(
    (name: ThemeState["themeColor"]) => {
      setThemeColorName(name);
    },
    [setThemeColorName],
  );

  return { themeColor: themeColorName, setThemeColor: setTheme };
}
