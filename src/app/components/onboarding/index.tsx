import { useEffect } from "react";
import { useOnboarding } from "@/app/hooks";
import { Dialog, DialogContent } from "@/app/components/ui/Dialog";
import { StepsContent } from "./StepsContent";
import { USER_PREFERENCES_KEYS } from "@/app/data/UserPreferences";

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
    localStorage.setItem(USER_PREFERENCES_KEYS.HAS_SEEN_ONBOARDING, "true");
  };

  const handleNext = () => {
    if (currentStep < StepsContent.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setHasSeenOnboarding(true);
      setIsOpen(false);
      localStorage.setItem(USER_PREFERENCES_KEYS.HAS_SEEN_ONBOARDING, "true");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = StepsContent[currentStep].component;
  const isLastStep = currentStep === StepsContent.length - 1;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="border-none p-0 lg:max-w-5xl">
        <CurrentStepComponent
          onSkip={handleSkip}
          onNext={handleNext}
          onBack={handleBack}
          isLastStep={isLastStep}
        />
      </DialogContent>
    </Dialog>
  );
}
