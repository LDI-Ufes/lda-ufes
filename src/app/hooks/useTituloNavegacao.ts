import { useEffect } from "react";

export function useTituloNavegacao(titulo: string) {
  useEffect(() => {
    const tituloAnterior = document.title;
    document.title = titulo;

    return () => {
      document.title = tituloAnterior;
    };
  }, [titulo]);
}
