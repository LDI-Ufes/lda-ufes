import React from "react";

interface H2Props {
  id?: string;
  children: React.ReactNode;
}

const H2: React.FC<H2Props> = ({ id, children }) => {
  return <h2 id={id}>{children}</h2>;
};

export default H2;
