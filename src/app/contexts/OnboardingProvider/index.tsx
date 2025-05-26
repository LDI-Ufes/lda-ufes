import { USER_PREFERENCES_KEYS } from "@/app/data/UserPreferences";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface OnboardingContextData {
  hasSeenOnboarding: boolean;
  setHasSeenOnboarding: (value: boolean) => void;
  currentStep: number;
  setCurrentStep: (value: number) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const OnboardingContext = createContext<OnboardingContextData>(
  {} as OnboardingContextData,
);

function OnboardingProvider({ children }: { children: ReactNode }) {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedOnboarding = localStorage.getItem(
      USER_PREFERENCES_KEYS.HAS_SEEN_ONBOARDING,
    );

    if (storedOnboarding === "true") {
      setHasSeenOnboarding(true);
      setIsOpen(false);
    }

    if (!storedOnboarding) {
      setIsOpen(true);
    }
  }, []);

  return (
    <OnboardingContext.Provider
      value={{
        hasSeenOnboarding,
        setHasSeenOnboarding,
        currentStep,
        setCurrentStep,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export { OnboardingContext, OnboardingProvider };
