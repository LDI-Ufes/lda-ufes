interface EquationBoxProps {
  children: React.ReactNode;
}

const EquationBox = ({ children }: EquationBoxProps) => {
  return <div className="box-centro">{children}</div>;
};

export { EquationBox };
