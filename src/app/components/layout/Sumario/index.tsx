import React from "react";
import { Paginacao } from "@/settings/Paginacao";
import { Link } from "react-router-dom";

export const Sumario: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Sumário</h2>
      <nav>
        <ul className="space-y-2">
          {Paginacao.map((page) => (
            <li key={page.page}>
              <Link
                to={`/${page.page.toLowerCase()}`}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
