import { Link } from "react-router-dom";
import { Button } from "../../ui/Button";

const NotFound = () => {
  return (
    <div className="bg-primary fixed top-0 left-0 z-[999] flex h-screen w-screen flex-col items-center justify-center text-center text-white">
      <h1 className="mb-4 text-4xl font-bold">Ops! Página não encontrada</h1>
      <p className="mb-8 text-lg">
        Desculpe, a página que você está procurando não existe.
      </p>
      <Button variant="secondary" asChild>
        <Link to="/">Voltar para a Home</Link>
      </Button>
    </div>
  );
};

export { NotFound };
