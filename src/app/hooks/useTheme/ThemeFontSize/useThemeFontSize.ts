import { useState, useEffect } from "react";
import type { ThemeState } from "../theme";
import {
  USER_DEFAULT_VALUES,
  USER_PREFERENCES_KEYS,
} from "@/app/data/UserPreferences";

export function useThemeFontSize() {
  const [fontSize, setFontSizeState] = useState<ThemeState["fontSize"]>("");

  useEffect(() => {
    const savedFontSize = localStorage.getItem(USER_PREFERENCES_KEYS.FONT_SIZE);
    if (savedFontSize) {
      setFontSizeState(savedFontSize as ThemeState["fontSize"]);
    } else {
      setFontSizeState(USER_DEFAULT_VALUES.FONT_SIZE);
      localStorage.setItem(
        USER_PREFERENCES_KEYS.FONT_SIZE,
        USER_DEFAULT_VALUES.FONT_SIZE,
      );
    }
  }, []);

  useEffect(() => {
    if (fontSize) {
      document.documentElement.style.setProperty(
        "--theme-font-size",
        `${fontSize}px`,
      );
      localStorage.setItem(USER_PREFERENCES_KEYS.FONT_SIZE, fontSize);
    }
  }, [fontSize]);

  return { fontSize, setFontSize: setFontSizeState };
}
