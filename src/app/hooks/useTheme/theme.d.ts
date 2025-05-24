export type ThemeState = {
  themeColor: "light" | "dark" | "cream" | "";
  setThemeColor: (themeColor: "light" | "dark" | "cream" | "") => void;
  letterSpacing: number; // em 'em'
  setLetterSpacing: (spacing: number) => void;
  lineHeight: number; // multiplicador
  setLineHeight: (height: number) => void;
  fontSize: number; // em 'px'
  setFontSize: (size: number) => void;
  animationsDisabled: boolean;
  setAnimationsDisabled: (disabled: boolean) => void;
  colorsDisabled: boolean;
  setColorsDisabled: (disabled: boolean) => void;
};
