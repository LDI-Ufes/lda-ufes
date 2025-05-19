import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { SettingsCapitulos } from "../../settings/ConfigCapitulos";
import { Search } from "../search";

const routes = SettingsCapitulos.map((route) => ({
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
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
            index={route.path === "/"}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Router;
