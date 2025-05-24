import React from "react";

interface PProps {
  children: React.ReactNode;
}

const P: React.FC<PProps> = ({ children }) => {
  return <p>{children}</p>;
};

export default P;
