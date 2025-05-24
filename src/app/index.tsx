import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import { OnboardingProvider } from "@/app/contexts";
import { Onboarding } from "@/app/components/Onboarding";
import Router from "@/app/router";
import { ThemeProvider } from "@/app/contexts/ThemeProvider";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Elemento root não encontrado");
}

createRoot(root).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <OnboardingProvider>
          <Onboarding />
          <Router />
        </OnboardingProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
