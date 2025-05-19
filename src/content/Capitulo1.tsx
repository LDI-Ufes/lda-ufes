import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const Capitulo1 = () => {
  return (
    <Layout titulo="Capítulo 1 - Exemplo" subtitulo="Exemplo">
      <h1 className="text-2xl font-bold">
        Bem-vindo ao modelo de livro acessível digital.
      </h1>
      <p className="text-gray-600">
        Este é um modelo de livro acessível digital que utiliza a tecnologia de
        leitura acessível para tornar o conteúdo mais acessível para todos os
        usuários.
      </p>
      <Button>Clique aqui</Button>
    </Layout>
  );
};

export default Capitulo1;
