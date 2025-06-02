import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../styles/index.css";
import "./styles/app.css";
import { OnboardingProvider, ThemeProvider } from "@/app/contexts";
import { Onboarding } from "@/app/components/onboarding";
import Router from "@/app/router";
import { Loader } from "@/app/components/layout/Loader";
import Clarity from "@microsoft/clarity";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Elemento root não encontrado");
}

if (import.meta.env.VITE_APP_CLARITY_PROJECT_ID) {
  Clarity.init(import.meta.env.VITE_APP_CLARITY_PROJECT_ID);
}

createRoot(root).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.VITE_APP_BASE_PATH || "/"}>
        <Loader />
        <OnboardingProvider>
          <Onboarding />
          <Router />
        </OnboardingProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
