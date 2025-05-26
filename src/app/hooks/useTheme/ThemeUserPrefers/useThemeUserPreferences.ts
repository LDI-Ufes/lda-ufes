import { useState, useEffect } from "react";
import type { ThemeState } from "../theme";
import { USER_PREFERENCES_KEYS } from "@/app/data/UserPreferences";

export function useThemeUserPreferences() {
  const [animationsDisabled, setAnimationsDisabledState] =
    useState<ThemeState["animationsDisabled"]>(false);
  const [colorsDisabled, setColorsDisabledState] =
    useState<ThemeState["colorsDisabled"]>(false);

  useEffect(() => {
    if (animationsDisabled) {
      localStorage.setItem(USER_PREFERENCES_KEYS.ANIMATIONS_DISABLED, "true");
      document.documentElement.classList.add("animations-disabled");
    } else {
      localStorage.setItem(USER_PREFERENCES_KEYS.ANIMATIONS_DISABLED, "false");
      document.documentElement.classList.remove("animations-disabled");
    }
  }, [animationsDisabled]);

  useEffect(() => {
    if (colorsDisabled) {
      localStorage.setItem(USER_PREFERENCES_KEYS.COLORS_DISABLED, "true");
      document.documentElement.classList.add("colors-disabled");
    } else {
      localStorage.setItem(USER_PREFERENCES_KEYS.COLORS_DISABLED, "false");
      document.documentElement.classList.remove("colors-disabled");
    }
  }, [colorsDisabled]);

  return {
    animationsDisabled,
    setAnimationsDisabled: setAnimationsDisabledState,
    colorsDisabled,
    setColorsDisabled: setColorsDisabledState,
  };
}
