// Interface simplificada para o usuário configurar as rotas
interface ConfigPaginacao {
  title: string;
  subtitle?: string;
  page: string; // Nome do arquivo da página sem a extensão
  children?: ConfigPaginacao[];
}

export type { ConfigPaginacao };
