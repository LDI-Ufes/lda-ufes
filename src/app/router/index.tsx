import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Paginacao } from "./pagination";
import { Pesquisa, MDXContent } from "@/components/layout";
import { Inicio } from "@/home";
import { MDXProvider } from "@/app/providers";

const Router: React.FC = () => {
  return (
    <MDXProvider>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/pesquisa" element={<Pesquisa />} />
          <Route path="/" element={<Inicio />} />
          {Paginacao.map((route) => {
            return (
              <Route
                key={route.page}
                path={route.page}
                element={<MDXContent pageName={route.page} />}
              />
            );
          })}
        </Routes>
      </Suspense>
    </MDXProvider>
  );
};

export default Router;
