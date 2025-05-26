import { Button } from "@/app/components/ui/Button";
import { useTheme } from "@/app/hooks/useTheme";
import {
  MdAdd,
  MdArrowBack,
  MdRemove,
  MdOutlineTextRotationNone,
  MdWrapText,
  MdTextFields,
} from "react-icons/md";

import { FONT_SIZE_VALUES } from "@/app/hooks/useTheme/ThemeFontSize/constants.d";
import { LETTER_SPACING_VALUES } from "@/app/hooks/useTheme/ThemeLetterSpacing/constants.d";
import { LINE_HEIGHT_VALUES } from "@/app/hooks/useTheme/ThemeLineHeight/constants.d";

import { USER_DEFAULT_VALUES } from "@/app/data/UserPreferences/index";
import { cn } from "@/app/utils/cn";

const TextAdjustments = ({
  setModalCategory,
  className,
}: {
  setModalCategory: (category: null) => void;
  className?: string;
}) => {
  const {
    fontSize,
    setFontSize,
    letterSpacing,
    setLetterSpacing,
    lineHeight,
    setLineHeight,
  } = useTheme();

  const increaseFontSize = (fontSize: string): string => {
    const currentIndex = FONT_SIZE_VALUES.indexOf(
      fontSize as (typeof FONT_SIZE_VALUES)[number],
    );
    if (currentIndex === -1 || currentIndex === FONT_SIZE_VALUES.length - 1) {
      return fontSize;
    }
    return FONT_SIZE_VALUES[currentIndex + 1];
  };

  const decreaseFontSize = (fontSize: string): string => {
    const currentIndex = FONT_SIZE_VALUES.indexOf(
      fontSize as (typeof FONT_SIZE_VALUES)[number],
    );
    if (currentIndex <= 0) {
      return fontSize;
    }
    return FONT_SIZE_VALUES[currentIndex - 1];
  };

  const increaseLineHeight = (lineHeight: string): string => {
    const currentIndex = LINE_HEIGHT_VALUES.indexOf(
      lineHeight as (typeof LINE_HEIGHT_VALUES)[number],
    );
    if (currentIndex === -1 || currentIndex === LINE_HEIGHT_VALUES.length - 1) {
      return lineHeight;
    }
    return LINE_HEIGHT_VALUES[currentIndex + 1];
  };

  const decreaseLineHeight = (lineHeight: string): string => {
    const currentIndex = LINE_HEIGHT_VALUES.indexOf(
      lineHeight as (typeof LINE_HEIGHT_VALUES)[number],
    );
    if (currentIndex <= 0) {
      return lineHeight;
    }
    return LINE_HEIGHT_VALUES[currentIndex - 1];
  };

  const increaseLetterSpacing = (letterSpacing: string): string => {
    const currentIndex = LETTER_SPACING_VALUES.indexOf(
      letterSpacing as (typeof LETTER_SPACING_VALUES)[number],
    );
    if (
      currentIndex === -1 ||
      currentIndex === LETTER_SPACING_VALUES.length - 1
    ) {
      return letterSpacing;
    }
    return LETTER_SPACING_VALUES[currentIndex + 1];
  };

  const decreaseLetterSpacing = (letterSpacing: string): string => {
    const currentIndex = LETTER_SPACING_VALUES.indexOf(
      letterSpacing as (typeof LETTER_SPACING_VALUES)[number],
    );
    if (currentIndex <= 0) {
      return letterSpacing;
    }
    return LETTER_SPACING_VALUES[currentIndex - 1];
  };

  const TEXT_ADJUSTMENTS_VALUES: Record<
    (typeof LETTER_SPACING_VALUES)[number],
    string
  > = {
    "0.00": "0%",
    "0.03": "3%",
    "0.06": "6%",
    "0.09": "9%",
    "0.12": "12%",
  };

  const TEXT_ADJUSTMENTS_VALUES_LINE_HEIGHT: Record<
    (typeof LINE_HEIGHT_VALUES)[number],
    string
  > = {
    "1.50": "150%",
    "1.80": "180%",
    "2.20": "220%",
    "2.50": "250%",
    "2.80": "280%",
    "3.00": "300%",
  };

  return (
    <div
      className={cn(
        "bg-theme-background absolute top-10 right-0 rounded-lg rounded-tr-none p-4 shadow-sm shadow-slate-300 lg:top-12 lg:w-[600px] lg:p-6",
        className,
      )}
    >
      <header className="mb-8 flex items-center justify-center lg:mb-8">
        <Button
          variant="ghost"
          onClick={() => setModalCategory(null)}
          className="absolute top-2 left-0"
        >
          <MdArrowBack className="text-secondary size-5" />
        </Button>
        <h3 className="text-primary text-sm font-semibold uppercase lg:text-base">
          Ajustes de texto
        </h3>
      </header>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-bold uppercase">
              Espaçamento entre letras
            </p>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  setLetterSpacing(decreaseLetterSpacing(letterSpacing))
                }
              >
                <MdRemove className="text-secondary size-7" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  setLetterSpacing(USER_DEFAULT_VALUES.LETTER_SPACING)
                }
                disabled={letterSpacing === USER_DEFAULT_VALUES.LETTER_SPACING}
                className="disabled:opacity-50"
              >
                <MdOutlineTextRotationNone className="text-secondary size-7" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  setLetterSpacing(increaseLetterSpacing(letterSpacing))
                }
              >
                <MdAdd className="text-secondary size-7" />
              </Button>
            </div>
          </div>
          <progress
            className="text-primary border-primary [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary h-3 w-full border-2 bg-none transition-all duration-300 [&::-webkit-progress-bar]:bg-transparent"
            value={
              LETTER_SPACING_VALUES.indexOf(
                letterSpacing as (typeof LETTER_SPACING_VALUES)[number],
              ) + 1
            }
            max={LETTER_SPACING_VALUES.length}
          />
          <p className="text-sm">
            Você selecionou:{" "}
            <span className="text-primary font-bold">
              {
                TEXT_ADJUSTMENTS_VALUES[
                  letterSpacing as keyof typeof TEXT_ADJUSTMENTS_VALUES
                ]
              }
            </span>
            . Este é o espaçamento entre letras recomendado.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-bold uppercase">Tamanho do texto</p>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLineHeight(decreaseLineHeight(lineHeight))}
              >
                <MdRemove className="text-secondary size-7" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLineHeight(USER_DEFAULT_VALUES.LINE_HEIGHT)}
                disabled={lineHeight === USER_DEFAULT_VALUES.LINE_HEIGHT}
                className="disabled:opacity-50"
              >
                <MdWrapText className="text-secondary size-7" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLineHeight(increaseLineHeight(lineHeight))}
              >
                <MdAdd className="text-secondary size-7" />
              </Button>
            </div>
          </div>
          <progress
            className="text-primary border-primary [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary h-3 w-full border-2 bg-none transition-all duration-300 [&::-webkit-progress-bar]:bg-transparent"
            value={
              LINE_HEIGHT_VALUES.indexOf(
                lineHeight as (typeof LINE_HEIGHT_VALUES)[number],
              ) + 1
            }
            max={LINE_HEIGHT_VALUES.length}
          />
          <p className="text-sm">
            Você selecionou:{" "}
            <span className="text-primary font-bold">
              {
                TEXT_ADJUSTMENTS_VALUES_LINE_HEIGHT[
                  lineHeight as keyof typeof TEXT_ADJUSTMENTS_VALUES_LINE_HEIGHT
                ]
              }
            </span>
            . Este é o tamanho de texto recomendado.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-bold uppercase">Tamanho do texto</p>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setFontSize(decreaseFontSize(fontSize))}
                >
                  <MdRemove className="text-secondary size-7" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setFontSize(USER_DEFAULT_VALUES.FONT_SIZE)}
                  disabled={fontSize === USER_DEFAULT_VALUES.FONT_SIZE}
                  className="disabled:opacity-50"
                >
                  <MdTextFields className="text-secondary size-7" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setFontSize(increaseFontSize(fontSize))}
                >
                  <MdAdd className="text-secondary size-7" />
                </Button>
              </div>
            </div>
            <progress
              className="text-primary border-primary [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary h-3 w-full border-2 bg-none transition-all duration-300 [&::-webkit-progress-bar]:bg-transparent"
              value={
                FONT_SIZE_VALUES.indexOf(
                  fontSize as (typeof FONT_SIZE_VALUES)[number],
                ) + 1
              }
              max={FONT_SIZE_VALUES.length}
            />
            <p className="text-sm">
              Você selecionou:{" "}
              <span className="text-primary font-bold">{fontSize}px</span>. Este
              é o tamanho de texto recomendado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TextAdjustments };
