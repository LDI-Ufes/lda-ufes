import { useState, useEffect } from "react";
import type { ThemeState } from "../theme";
import {
  USER_DEFAULT_VALUES,
  USER_PREFERENCES_KEYS,
} from "@/app/data/UserPreferences";

export function useThemeLineHeight() {
  const [lineHeight, setLineHeightState] =
    useState<ThemeState["lineHeight"]>("");

  useEffect(() => {
    const savedLineHeight = localStorage.getItem(
      USER_PREFERENCES_KEYS.LINE_HEIGHT,
    );
    if (savedLineHeight) {
      setLineHeightState(savedLineHeight as ThemeState["lineHeight"]);
    } else {
      setLineHeightState(USER_DEFAULT_VALUES.LINE_HEIGHT);
      localStorage.setItem(
        USER_PREFERENCES_KEYS.LINE_HEIGHT,
        USER_DEFAULT_VALUES.LINE_HEIGHT,
      );
    }
  }, []);

  useEffect(() => {
    if (lineHeight) {
      document.documentElement.style.setProperty(
        "--theme-line-height",
        `${lineHeight}`,
      );
      localStorage.setItem(USER_PREFERENCES_KEYS.LINE_HEIGHT, lineHeight);
    }
  }, [lineHeight]);

  return { lineHeight, setLineHeight: setLineHeightState };
}
