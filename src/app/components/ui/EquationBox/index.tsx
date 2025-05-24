import React from "react";

interface EquationBoxProps {
  children: React.ReactNode;
}

const EquationBox: React.FC<EquationBoxProps> = ({ children }) => {
  return <div className="box-centro">{children}</div>;
};

export default EquationBox;
