import { useState, useEffect } from "react";
import type { ThemeState } from "../theme";
import {
  USER_DEFAULT_VALUES,
  USER_PREFERENCES_KEYS,
} from "@/app/data/UserPreferences";

export function useThemeLetterSpacing() {
  const [letterSpacing, setLetterSpacingState] =
    useState<ThemeState["letterSpacing"]>("");

  useEffect(() => {
    const savedLetterSpacing = localStorage.getItem(
      USER_PREFERENCES_KEYS.LETTER_SPACING,
    );
    if (savedLetterSpacing) {
      setLetterSpacingState(savedLetterSpacing as ThemeState["letterSpacing"]);
    } else {
      setLetterSpacingState(USER_DEFAULT_VALUES.LETTER_SPACING);
      localStorage.setItem(
        USER_PREFERENCES_KEYS.LETTER_SPACING,
        USER_DEFAULT_VALUES.LETTER_SPACING,
      );
    }
  }, []);

  useEffect(() => {
    if (letterSpacing) {
      document.documentElement.style.setProperty(
        "--theme-letter-spacing",
        `${letterSpacing}em`,
      );
      localStorage.setItem(USER_PREFERENCES_KEYS.LETTER_SPACING, letterSpacing);
    }
  }, [letterSpacing]);

  return { letterSpacing, setLetterSpacing: setLetterSpacingState };
}
