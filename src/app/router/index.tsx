import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Paginacao } from "../../settings/Paginacao";
import { Pesquisa } from "@/components/layout";
import { Inicio } from "@/home";
import { MDXProviderWrapper } from "../providers/MDXProvider";

const routes = Paginacao.map((route) => ({
  ...route,
  component: React.lazy(
    () => import(/* @vite-ignore */ `../../pages/${route.page}.mdx`),
  ),
}));

const Router: React.FC = () => {
  return (
    <MDXProviderWrapper>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/pesquisa" element={<Pesquisa />} />
          <Route path="/" element={<Inicio />} />
          {routes.map((route) => {
            const path = route.page.toLowerCase();
            return (
              <Route key={path} path={path} element={<route.component />} />
            );
          })}
        </Routes>
      </Suspense>
    </MDXProviderWrapper>
  );
};

export default Router;
