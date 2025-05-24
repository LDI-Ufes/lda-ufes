import type { ReactNode } from "react";
import { Cabecalho } from "../../theme/Cabecalho";
import { Rodape } from "../../theme/Rodape";
import { Conteudo } from "../../theme/Conteudo";
import { Sumario } from "../Sumario";

interface PaginaProps {
  children: ReactNode;
  titulo: string;
  subtitulo: string;
  sumario?: boolean;
}

export const Pagina = ({
  children,
  titulo,
  subtitulo,
  sumario = true,
}: PaginaProps) => {
  return (
    <>
      <Cabecalho titulo={titulo} subtitulo={subtitulo} />
      <main className="mx-auto flex max-w-3xl gap-8">
        <Conteudo>{children}</Conteudo>
        {sumario && <Sumario />}
      </main>
      <Rodape />
    </>
  );
};
