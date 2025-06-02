import React from "react";

interface StrongProps {
  children: React.ReactNode;
}

const Strong = ({ children }: StrongProps) => {
  return <span className="text-primary font-bold">{children}</span>;
};

export { Strong };
