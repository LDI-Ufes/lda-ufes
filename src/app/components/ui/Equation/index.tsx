import React from "react";

interface EquationProps {
  id: string;
  imgSrc?: string;
  children?: React.ReactNode;
}

const Equation: React.FC<EquationProps> = ({ id, imgSrc, children }) => {
  return (
    <div className="formula mt-4">
      <div className="line flex flex-col items-start">
        <div className="border-2 border-secondary rounded-lg p-2">
          {imgSrc ? <img className="eq" src={imgSrc} /> : children}
        </div>
        <span className="box-eq mt-1 text-sm mb-4 text-primary">equação {id}</span>
      </div>
    </div>
  );
};

export default Equation;
