import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Inicio from "./content/Inicio";
import { OnboardingProvider } from "./app/contexts/OnboardingContext";
import { Onboarding } from "./app/components/start/Integracao";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OnboardingProvider>
      <Onboarding />
      <Inicio />
    </OnboardingProvider>
  </StrictMode>,
);
