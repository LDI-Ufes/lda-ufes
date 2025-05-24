import type { ReactNode } from "react";
import { Header, Footer, Content, Sumario } from "@/app/components/Theme";

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
  subtitle = "Livro Digital",
  hasSummary = true,
  cover,
}: PageProps) => {
  return (
    <>
      <Header title={title} subtitle={subtitle} />
      {cover ? (
        <>
          <div className="relative h-48 w-full">
            <img
              src={`/src/public/covers/${cover}`}
              alt="Capa do livro"
              className="h-full w-full object-cover"
            />
          </div>
        </>
      ) : (
        <>
          <div className="bg-primary relative h-48 w-full">
            <div className="flex h-full items-center justify-center">
              <p className="text-2xl font-bold text-white">
                Nenhuma capa selecionada
              </p>
            </div>
          </div>
        </>
      )}
      <main className="mx-auto flex max-w-7xl justify-between gap-8">
        <Content>{children}</Content>
        {hasSummary && <Sumario />}
      </main>
      <Footer />
    </>
  );
};
