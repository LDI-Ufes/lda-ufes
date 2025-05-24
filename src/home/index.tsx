import { Button } from "@/app/components/ui/Button";
import { Page } from "@/app/components/layout/Page";

export const Home = () => {
  return (
    <Page title="LDA - Modelo de Livro Acessível Digital">
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
    </Page>
  );
};
