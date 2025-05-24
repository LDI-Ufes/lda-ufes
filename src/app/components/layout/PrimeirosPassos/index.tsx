import { useEffect } from "react";
import { useOnboarding } from "@/app/hooks";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Passo1, Passo2, Passo3, Passo4 } from "./Passos";

const steps = [
  {
    title: "Boas-vindas",
    component: Passo1,
  },
  {
    title: "Temas de leitura",
    component: Passo2,
  },
  {
    title: "Ajustes de texto",
    component: Passo3,
  },
  {
    title: "Sem distração",
    component: Passo4,
  },
  {
    title: "Tudo certo",
    component: Passo4,
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
    localStorage.setItem("hasOnboarding", "completed");
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setHasSeenOnboarding(true);
      setIsOpen(false);
      localStorage.setItem("hasOnboarding", "completed");
    }
  };

  const CurrentStepComponent = steps[currentStep].component;
  const isLastStep = currentStep === steps.length - 1;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{steps[currentStep].title}</DialogTitle>
        </DialogHeader>
        <CurrentStepComponent
          onSkip={handleSkip}
          onNext={handleNext}
          isLastStep={isLastStep}
        />
      </DialogContent>
    </Dialog>
  );
}
