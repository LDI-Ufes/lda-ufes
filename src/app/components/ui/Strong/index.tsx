import React from "react";

interface StrongProps {
  children: React.ReactNode;
}

const Strong: React.FC<StrongProps> = ({ children }) => {
  return <span className="bold">{children}</span>;
};

export default Strong;
