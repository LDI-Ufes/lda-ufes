import { useContext } from "react";
import { OnboardingContext } from "@/app/contexts";

export function useOnboarding() {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error("Houve um erro ao carregar o contexto de onboarding");
  }

  return context;
}
