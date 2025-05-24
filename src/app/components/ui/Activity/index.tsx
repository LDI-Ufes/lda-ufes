import React from "react";

interface ActivityProps {
  title: string;
  children: React.ReactNode;
}

const Activity: React.FC<ActivityProps> = ({ title, children }) => {
  return (
    <div className="atv">
      <h3 className="atividade">{title}</h3>
      {children}
    </div>
  );
};

export default Activity;
