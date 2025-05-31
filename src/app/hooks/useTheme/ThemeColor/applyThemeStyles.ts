import type { ThemeState } from "../theme";
import type { CalculatedThemeColors } from "./types.d";
import { THEME_COLORS } from "./constants.d";
import { USER_PREFERENCES_KEYS } from "@/app/data/UserPreferences";

export function applyThemeStyles(
  calculatedColors: CalculatedThemeColors | null,
  name: ThemeState["themeColor"],
): void {
  if (calculatedColors) {
    document.documentElement.style.setProperty(
      "--color-primary",
      calculatedColors.primary,
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      calculatedColors.secondary,
    );
    document.documentElement.style.setProperty(
      "--color-theme",
      calculatedColors.theme,
    );
    document.documentElement.style.setProperty(
      "--color-theme-background",
      calculatedColors.themeBackground,
    );
    localStorage.setItem(
      USER_PREFERENCES_KEYS.THEME_CALCULATED_COLORS,
      JSON.stringify(calculatedColors),
    );
  }

  THEME_COLORS.forEach((color) => {
    document.documentElement.classList.remove(color);
  });

  if (name) {
    document.documentElement.classList.add(name);
  }
}
