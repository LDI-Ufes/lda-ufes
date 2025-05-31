import React from "react";

interface NoBreakProps {
  children: React.ReactNode;
}

const NoBreak: React.FC<NoBreakProps> = ({ children }) => {
  return <span className="nobreak">{children}</span>;
};

export { NoBreak };
