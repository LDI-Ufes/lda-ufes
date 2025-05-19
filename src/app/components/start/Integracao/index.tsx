import { useEffect } from "react";
import { useOnboarding } from "../../../contexts/OnboardingContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import {
  WelcomeStep,
  ReadingThemesStep,
  TextSettingsStep,
  FocusModeStep,
  ReadyStep,
} from "./OnboardingSteps";

const steps = [
  {
    title: "Boas-vindas",
    component: WelcomeStep,
  },
  {
    title: "Temas de leitura",
    component: ReadingThemesStep,
  },
  {
    title: "Ajustes de texto",
    component: TextSettingsStep,
  },
  {
    title: "Sem distração",
    component: FocusModeStep,
  },
  {
    title: "Tudo certo",
    component: ReadyStep,
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
