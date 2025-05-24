import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { OnboardingProvider } from "@/app/providers";
import { Onboarding } from "@/app/components/onboarding";
import Router from "@/app/router";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Elemento root não encontrado");
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <OnboardingProvider>
        <Onboarding />
        <Router />
      </OnboardingProvider>
    </BrowserRouter>
  </StrictMode>,
);
