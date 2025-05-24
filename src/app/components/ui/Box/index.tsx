import React from "react";

interface BoxProps {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return <div className="box">{children}</div>;
};

export default Box;
