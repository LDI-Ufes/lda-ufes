import { useState, useEffect } from "react";
import type { ThemeState } from "../theme";
import {
  USER_DEFAULT_VALUES,
  USER_PREFERENCES_KEYS,
} from "@/app/data/UserPreferences";

export function usePersistentThemeName(): [
  ThemeState["themeColor"],
  (name: ThemeState["themeColor"]) => void,
] {
  const [themeColorName, setThemeColorNameInternal] =
    useState<ThemeState["themeColor"]>("");

  useEffect(() => {
    const savedThemeName = localStorage.getItem(
      USER_PREFERENCES_KEYS.THEME,
    ) as ThemeState["themeColor"];
    setThemeColorNameInternal(savedThemeName || USER_DEFAULT_VALUES.THEME);
  }, []);

  const setThemeColorName = (name: ThemeState["themeColor"]) => {
    setThemeColorNameInternal(name);
    localStorage.setItem(USER_PREFERENCES_KEYS.THEME, name);
  };

  return [themeColorName, setThemeColorName];
}
