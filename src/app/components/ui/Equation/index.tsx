interface EquationProps {
  id: string;
  imgSrc?: string;
  children?: React.ReactNode;
}

const Equation = ({ id, imgSrc, children }: EquationProps) => {
  return (
    <div className="formula mt-4">
      <div className="line flex flex-col items-start">
        <div className="border-secondary rounded-lg border-2 p-2">
          {imgSrc ? <img className="eq" src={imgSrc} /> : children}
        </div>
        <span className="box-eq text-primary mt-1 mb-4 text-sm">
          equação {id}
        </span>
      </div>
    </div>
  );
};

export { Equation };
