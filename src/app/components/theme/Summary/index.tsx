import React from "react";
import { Pagination } from "@/app/router/routes";
import { Link } from "react-router-dom";

export const Sumario: React.FC = () => {
  return (
    <div className="sticky top-20 self-start p-4">
      <h2 className="mb-4 text-2xl font-bold">Sumário</h2>
      <nav>
        <ul className="space-y-2">
          {Pagination.map((page) => (
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
