import { useEffect } from "react";
import { useOnboarding } from "../../../contexts/OnboardingContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Button } from "../../ui/button";

const steps = [
  {
    title: "Boas-vindas",
    content:
      "Bem-vindo ao LDA! Aqui você encontrará uma experiência única de leitura.",
  },
  {
    title: "Temas de leitura",
    content:
      "Escolha entre diferentes temas para personalizar sua experiência de leitura.",
  },
  {
    title: "Ajustes de texto",
    content:
      "Ajuste o tamanho, fonte e espaçamento do texto para sua melhor leitura.",
  },
  {
    title: "Sem distração",
    content: "Modo foco para uma leitura sem distrações.",
  },
  {
    title: "Tudo certo",
    content: "Agora você está pronto para começar sua jornada de leitura!",
  },
];

export function Onboarding() {
  const {
    hasSeenOnboarding,
    setHasSeenOnboarding,
    currentStep,
    setCurrentStep,
    isOpen,
    setIsOpen,
  } = useOnboarding();

  useEffect(() => {
    if (!hasSeenOnboarding) {
      setIsOpen(true);
    }
  }, [hasSeenOnboarding, setIsOpen]);

  const handleSkip = () => {
    setHasSeenOnboarding(true);
    setIsOpen(false);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setHasSeenOnboarding(true);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{steps[currentStep].title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p>{steps[currentStep].content}</p>
        </div>
        <div className="flex justify-between">
          {currentStep < steps.length - 1 && (
            <Button variant="outline" onClick={handleSkip}>
              Pular
            </Button>
          )}
          <Button onClick={handleNext}>
            {currentStep === steps.length - 1 ? "Começar" : "Próximo"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
