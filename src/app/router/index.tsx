import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Paginacao } from "../../settings/Paginacao";
import Search from "../search/index";
import Inicio from "@/content/Inicio";

const routes = Paginacao.map((route) => ({
  ...route,
  component: React.lazy(
    () => import(/* @vite-ignore */ `../../content/${route.page}`),
  ),
}));

const Router: React.FC = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/pesquisa" element={<Search />} />
        <Route path="/" element={<Inicio />} />
        {routes.map((route) => {
          const path = route.page.toLowerCase();
          return <Route key={path} path={path} element={<route.component />} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default Router;
