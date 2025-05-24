import { useEffect } from "react";
import { useOnboarding } from "@/app/hooks";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StepsContent } from "./StepsContent";

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
    if (currentStep < StepsContent.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setHasSeenOnboarding(true);
      setIsOpen(false);
      localStorage.setItem("hasOnboarding", "completed");
    }
  };

  const CurrentStepComponent = StepsContent[currentStep].component;
  const isLastStep = currentStep === StepsContent.length - 1;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{StepsContent[currentStep].title}</DialogTitle>
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
