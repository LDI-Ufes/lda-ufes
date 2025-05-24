import React from "react";

interface EquationProps {
  id: string;
  imgSrc?: string;
  children?: React.ReactNode;
}

const Equation: React.FC<EquationProps> = ({ id, imgSrc, children }) => {
  return (
    <div className="formula">
      <div className="line">
        {imgSrc ? <img className="eq" src={imgSrc} /> : <p>{children}</p>}
        <span className="box-eq">equação {id}</span>
      </div>
    </div>
  );
};

export default Equation;
