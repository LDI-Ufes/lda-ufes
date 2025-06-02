import { Button } from "@/app/components/ui/Button";
import { useTheme } from "@/app/hooks/useTheme";
import {
  MdAdd,
  MdArrowBack,
  MdRemove,
  MdOutlineTextRotationNone,
  MdWrapText,
  MdTextFields,
  MdPlayArrow,
  MdChevronRight,
  MdArrowForward,
} from "react-icons/md";

import { FONT_SIZE_VALUES } from "@/app/hooks/useTheme/ThemeFontSize/constants.d";
import { LETTER_SPACING_VALUES } from "@/app/hooks/useTheme/ThemeLetterSpacing/constants.d";
import { LINE_HEIGHT_VALUES } from "@/app/hooks/useTheme/ThemeLineHeight/constants.d";

import { USER_DEFAULT_VALUES } from "@/app/data/UserPreferences/index";
import { cn } from "@/app/utils/cn";
import React, { useState } from "react";

// Tipagem para as props do componente
interface OnboardingStepProps {
  onSkip: () => void;
  onNext: () => void;
  onBack: () => void;
  isLastStep: boolean;
}

export const Step3 = ({
  onSkip,
  onNext,
  onBack,
  isLastStep,
}: OnboardingStepProps) => {
  const {
    fontSize,
    setFontSize,
    letterSpacing,
    setLetterSpacing,
    lineHeight,
    setLineHeight,
  } = useTheme();

  // Estado para controlar qual ajuste está aberto
  const [openAdjustment, setOpenAdjustment] = useState<
    null | "letterSpacing" | "lineHeight" | "fontSize"
  >(null);

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
    <section className="bg-theme-background flex min-h-screen w-full flex-col items-center justify-center gap-14 rounded-3xl px-5 lg:max-h-[700px] lg:min-h-[700px] lg:overflow-hidden">
      <div className="flex flex-1 flex-col justify-center gap-8 pt-14">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-primary text-4xl font-bold lg:text-6xl">
            Ajustes de texto
          </h1>
          <p className="text-theme text-center lg:text-xl">
            Altere o estilo do texto que aparecerá na tela.
          </p>
        </div>
        <div
          className={cn(
            "bg-theme-background mx-auto w-full rounded-lg rounded-tr-none shadow-sm shadow-slate-300 lg:static lg:w-[600px] lg:p-6",
          )}
        >
          {/* Se nenhum ajuste estiver aberto, mostra os botões */}
          {openAdjustment === null && (
            <div className="flex flex-col">
              <Button
                variant="ghost"
                className="!h-14 w-full justify-between rounded-none"
                onClick={() => setOpenAdjustment("letterSpacing")}
              >
                <span className="flex items-center gap-2">
                  <MdOutlineTextRotationNone className="text-secondary size-5" />
                  Espaçamento entre letras
                </span>
                <MdArrowForward className="text-secondary size-5" />
              </Button>
              <Button
                variant="ghost"
                className="border-y-theme/15 !h-14 w-full justify-between rounded-none border-y-2"
                onClick={() => setOpenAdjustment("lineHeight")}
              >
                <span className="flex items-center gap-2">
                  <MdWrapText className="text-secondary size-5" />
                  Espaçamento entre linhas
                </span>
                <MdArrowForward className="text-secondary size-5" />
              </Button>
              <Button
                variant="ghost"
                className="!h-14 w-full justify-between rounded-none"
                onClick={() => setOpenAdjustment("fontSize")}
              >
                <span className="flex items-center gap-2">
                  <MdTextFields className="text-secondary size-5" />
                  Tamanho do texto
                </span>
                <MdArrowForward className="text-secondary size-5" />
              </Button>
            </div>
          )}
          {/* Espaçamento entre letras */}
          {openAdjustment === "letterSpacing" && (
            <div className="flex flex-col gap-2 p-5 pb-0">
              <div className="mb-2 flex items-center gap-2">
                <p className="flex-1 text-sm font-bold uppercase">
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
                    disabled={
                      letterSpacing === USER_DEFAULT_VALUES.LETTER_SPACING
                    }
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
                {letterSpacing === USER_DEFAULT_VALUES.LETTER_SPACING
                  ? ". Este é o espaçamento entre letras recomendado."
                  : ""}
              </p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpenAdjustment(null)}
                className="ml-auto"
              >
                <MdArrowBack className="text-secondary size-5" />
              </Button>
            </div>
          )}
          {/* Espaçamento entre linhas */}
          {openAdjustment === "lineHeight" && (
            <div className="flex flex-col gap-2 p-5 pb-0">
              <div className="mb-2 flex items-center gap-2">
                <p className="flex-1 text-sm font-bold uppercase">
                  Espaçamento entre linhas
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setLineHeight(decreaseLineHeight(lineHeight))
                    }
                  >
                    <MdRemove className="text-secondary size-7" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setLineHeight(USER_DEFAULT_VALUES.LINE_HEIGHT)
                    }
                    disabled={lineHeight === USER_DEFAULT_VALUES.LINE_HEIGHT}
                    className="disabled:opacity-50"
                  >
                    <MdWrapText className="text-secondary size-7" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setLineHeight(increaseLineHeight(lineHeight))
                    }
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
                . Este é o espaçamento entre linhas recomendado.
              </p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpenAdjustment(null)}
                className="ml-auto"
              >
                <MdArrowBack className="text-secondary size-5" />
              </Button>
            </div>
          )}
          {/* Tamanho do texto */}
          {openAdjustment === "fontSize" && (
            <div className="flex flex-col gap-2 p-5 pb-0">
              <div className="mb-2 flex items-center gap-2">
                <p className="flex-1 text-sm font-bold uppercase">
                  Tamanho do texto
                </p>
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
                <span className="text-primary font-bold">{fontSize}px</span>.
                Este é o tamanho de texto recomendado.
              </p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpenAdjustment(null)}
                className="ml-auto"
              >
                <MdArrowBack className="text-secondary size-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
      {/* Rodapé com navegação e progresso */}
      <div className="flex flex-col items-center gap-6 pb-14">
        <div className="flex items-center gap-4">
          <Button variant={"secondary"} onClick={onBack}>
            <MdArrowBack className="size-6" />
            Voltar
          </Button>
          <Button variant={"secondary"} onClick={onNext}>
            Avançar
            <MdPlayArrow className="size-6" />
          </Button>
        </div>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((step) => (
            <Button key={step} variant={"ghost"}>
              <div
                className={cn(
                  "size-2.5 rounded-full bg-zinc-400",
                  step === 3 && "bg-secondary size-4",
                )}
              />
            </Button>
          ))}
        </div>
        {!isLastStep && (
          <Button
            variant={"link"}
            onClick={onSkip}
            textStyle={"default"}
            className="!text-secondary font-medium"
          >
            Pular para o conteúdo
          </Button>
        )}
      </div>
    </section>
  );
};
