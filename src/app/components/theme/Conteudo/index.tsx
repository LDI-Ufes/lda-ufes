import { Navegacao } from "../Paginacao";

export const Conteudo = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[80dvh] flex-1 p-4">
      {children}
      <Navegacao />
    </div>
  );
};
