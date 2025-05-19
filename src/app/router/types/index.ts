// Interface simplificada para o usuário configurar as rotas
interface RouteConfig {
  path: string;
  title: string;
  subtitle?: string;
  page: string; // Nome do arquivo da página sem a extensão
  children?: RouteConfig[];
}

export type { RouteConfig };
