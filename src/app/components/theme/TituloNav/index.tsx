import { useTituloNavegacao } from "@/hooks/useTituloNavegacao";

interface TituloNavegacaoProps {
  titulo: string;
  children?: React.ReactNode;
}

export function TituloNavegacao({ titulo, children }: TituloNavegacaoProps) {
  useTituloNavegacao(titulo);

  return <>{children}</>;
}
