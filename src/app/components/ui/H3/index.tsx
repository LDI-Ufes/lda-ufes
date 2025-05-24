import React from "react";

interface H3Props {
  id?: string;
  children: React.ReactNode;
}

const H3: React.FC<H3Props> = ({ id, children }) => {
  return <h3 id={id}>{children}</h3>;
};

export default H3;
