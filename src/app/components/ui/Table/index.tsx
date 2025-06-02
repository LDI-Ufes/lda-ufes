import React from "react";

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

const Table = ({ children, className }: TableProps) => {
  return (
    <div className={"my-6 overflow-x-auto " + (className || "")}>
      <table className="min-w-full rounded-lg border border-gray-300 bg-white text-sm md:text-base">
        {children}
      </table>
    </div>
  );
};

export { Table };
