import type { ReactNode } from "react";
import { Cabecalho } from "./Cabecalho";
import { Rodape } from "./Rodape";
import { Conteudo } from "./Conteudo";
import { TituloNavegacao } from "../settings/TituloNavegacao";
import { Sumario } from "./Sumario";

interface LayoutProps {
  children: ReactNode;
  titulo: string;
  subtitulo: string;
  sumario?: boolean;
}

export const Layout = ({
  children,
  titulo,
  subtitulo,
  sumario = true,
}: LayoutProps) => {
  return (
    <>
      <Cabecalho titulo={titulo} subtitulo={subtitulo} />
      <TituloNavegacao titulo={titulo}>
        <main className="mx-auto flex max-w-3xl gap-8">
          <Conteudo>{children}</Conteudo>
          {sumario && <Sumario />}
        </main>
      </TituloNavegacao>
      <Rodape />
    </>
  );
};
