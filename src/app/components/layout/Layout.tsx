import type { ReactNode } from "react";
import { Cabecalho } from "./Cabecalho";
import { Rodape } from "./Rodape";
import { Conteudo } from "./Conteudo";
import { TituloNavegacao } from "../settings/TituloNavegacao";
import { Navegacao } from "./Paginacao";
interface LayoutProps {
  children: ReactNode;
  titulo: string;
  subtitulo: string;
}

export const Layout = ({ children, titulo, subtitulo }: LayoutProps) => {
  return (
    <>
      <Cabecalho titulo={titulo} subtitulo={subtitulo} />
      <TituloNavegacao titulo={titulo}>
        <Conteudo>{children}</Conteudo>
        <Navegacao />
      </TituloNavegacao>
      <Rodape />
    </>
  );
};
