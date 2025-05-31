import React from "react";

interface StrongProps {
  children: React.ReactNode;
}

const Strong = ({ children }: StrongProps) => {
  return <span className="bold">{children}</span>;
};

export { Strong };
