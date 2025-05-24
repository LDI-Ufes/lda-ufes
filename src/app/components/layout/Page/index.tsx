import type { ReactNode } from "react";
import { Header } from "../../theme/Header";
import { Footer } from "../../theme/Footer";
import { Content } from "../../theme/Content";
import { Sumario } from "../Summary";

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
      <main className="mx-auto flex max-w-7xl justify-between gap-8">
        <Content cover={cover}>{children}</Content>
        {hasSummary && <Sumario />}
      </main>
      <Footer />
    </>
  );
};
