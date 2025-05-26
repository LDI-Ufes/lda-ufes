import { useState, useEffect } from "react";
import type { ThemeState } from "../theme";
import { THEME_COLORS } from "./constants.d";
import {
  USER_DEFAULT_VALUES,
  USER_PREFERENCES_KEYS,
} from "@/app/data/UserPreferences";

export function useThemeColor() {
  const [themeColor, setThemeColor] = useState<ThemeState["themeColor"]>("");

  useEffect(() => {
    const savedTheme = localStorage.getItem(USER_PREFERENCES_KEYS.THEME);
    if (savedTheme) {
      setThemeColor(savedTheme as ThemeState["themeColor"]);
    } else {
      setThemeColor(USER_DEFAULT_VALUES.THEME);
      localStorage.setItem(
        USER_PREFERENCES_KEYS.THEME,
        USER_DEFAULT_VALUES.THEME,
      );
    }
  }, []);

  useEffect(() => {
    THEME_COLORS.forEach((color) => {
      document.documentElement.classList.remove(color);
    });

    if (themeColor) {
      document.documentElement.classList.add(themeColor);
      localStorage.setItem(USER_PREFERENCES_KEYS.THEME, themeColor);
    }
  }, [themeColor]);

  return { themeColor, setThemeColor };
}
