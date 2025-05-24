import type { ReactNode } from "react";
import { Header } from "../../theme/Header";
import { Footer } from "../../theme/Footer";
import { Content } from "../../theme/Content";
import { Sumario } from "../Summary";

interface PageProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  hasSummary?: boolean;
}

export const Page = ({
  children,
  title,
  subtitle,
  hasSummary = true,
}: PageProps) => {
  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <main className="mx-auto flex max-w-3xl gap-8">
        <Content>{children}</Content>
        {hasSummary && <Sumario />}
      </main>
      <Footer />
    </>
  );
};
