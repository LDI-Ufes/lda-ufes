import type { ReactNode } from "react";
import { Header, Footer, Content, Summary } from "@/app/components/theme";
import { ButtonActionSummary } from "../../theme/ButtonActionSummary";

interface PageProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  hasSummary?: boolean;
  cover?: string;
  hasProgress?: boolean;
}

export const Page = ({
  children,
  title,
  subtitle = "Capítulo",
  hasSummary = true,
  hasProgress = true,
  cover,
}: PageProps) => {
  return (
    <>
      <Header
        title={title}
        subtitle={subtitle}
        hasSearch={true}
        hasProgress={hasProgress}
      />
      {cover ? (
        <>
          <img
            src={
              cover.startsWith("/") ? `./${cover.substring(1)}` : `./${cover}`
            }
            alt="Capa do livro"
            className="relative mt-16 h-full max-h-48 w-full object-cover md:max-h-64 lg:mt-20 lg:max-h-96 xl:max-h-120"
          />
        </>
      ) : (
        <>
          <div className="from-primary to-primary/50 relative mt-16 flex h-screen max-h-48 w-full items-center justify-center bg-gradient-to-b object-cover md:max-h-64 lg:mt-20 lg:max-h-96 xl:max-h-120">
            <p className="text-2xl font-bold text-white">
              Nenhuma capa selecionada
            </p>
          </div>
        </>
      )}
      <main className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 py-5 lg:flex-row lg:py-16">
        <Content>{children}</Content>
        {hasSummary && <Summary className="hidden" />}
      </main>
      <Footer />
      <ButtonActionSummary />
    </>
  );
};
