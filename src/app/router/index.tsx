import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Pagination } from "./pagination";
import { Search, MDXContent } from "@/components/layout";
import { Home } from "@/home";
import { MDXProvider } from "@/app/providers";

const Router: React.FC = () => {
  return (
    <MDXProvider>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/pesquisa" element={<Search />} />
          <Route path="/" element={<Home />} />
          {Pagination.map((route) => {
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
