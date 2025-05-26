import type { ReactNode } from "react";
import { Header, Footer, Content, Sumario } from "@/app/components/theme";

interface PageProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  hasSummary?: boolean;
  cover?: string;
}

export const Page = ({
  children,
  title,
  subtitle = "Capítulo",
  hasSummary = true,
  cover,
}: PageProps) => {
  return (
    <>
      <Header title={title} subtitle={subtitle} hasSearch={true} />
      {cover ? (
        <>
          <div className="relative mt-16 h-48 w-full lg:mt-20 lg:h-64">
            <img
              src={`/covers/${cover}`}
              alt="Capa do livro"
              className="h-full w-full object-cover"
            />
          </div>
        </>
      ) : (
        <>
          <div className="from-primary to-primary/50 relative mt-16 h-48 w-full bg-gradient-to-b lg:mt-20 lg:h-64">
            <div className="flex h-full items-center justify-center">
              <p className="text-2xl font-bold text-white">
                Nenhuma capa selecionada
              </p>
            </div>
          </div>
        </>
      )}
      <main className="relative mx-auto flex max-w-7xl justify-between gap-8 py-5 lg:py-16">
        <Content>{children}</Content>
        {hasSummary && <Sumario />}
      </main>
      <Footer />
    </>
  );
};
