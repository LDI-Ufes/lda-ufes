import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

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

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedOnboarding = localStorage.getItem("hasOnboarding");

    if (storedOnboarding === "completed") {
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

export function useOnboarding() {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error("Houve um erro ao carregar o contexto de onboarding");
  }

  return context;
}
