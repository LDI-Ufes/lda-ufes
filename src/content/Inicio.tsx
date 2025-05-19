import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const Inicio = () => {
  return (
    <Layout
      titulo="LDA - Modelo de Livro Acessível Digital"
      subtitulo="Bem-vindo ao modelo de livro acessível digital."
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">
          Bem-vindo ao modelo de livro acessível digital.
        </h1>
        <p className="text-gray-600">
          Este é um modelo de livro acessível digital que utiliza a tecnologia
          de leitura acessível para tornar o conteúdo mais acessível para todos
          os usuários.
        </p>
        <Button>Clique aqui</Button>
      </div>
    </Layout>
  );
};

export default Inicio;
