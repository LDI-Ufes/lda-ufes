import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Pagination } from "./routes";
import { MDXContent } from "@/app/components/MDX";
import { Home } from "@/home";
import { MDXProvider } from "@/app/contexts/MDXProvider";
import { Search } from "@/app/components/search";
import { useScrollToHash } from "@/app/hooks/useScrollToHash";

const Router: React.FC = () => {
  useScrollToHash();

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
