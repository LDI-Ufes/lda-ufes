import React from "react";

interface BoxProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "success" | "danger";
  className?: string;
}

const typeStyles = {
  info: "bg-primary-50 border-primary-300 text-primary-900",
  warning: "bg-yellow-50 border-yellow-300 text-yellow-900",
  success: "bg-green-50 border-green-300 text-green-900",
  danger: "bg-red-50 border-red-300 text-red-900",
};

const Box = ({ children, type = "info", className }: BoxProps) => {
  return (
    <div
      className={`my-4 rounded-xl border-2 p-4 ${typeStyles[type]} ${className || ""}`}
    >
      {children}
    </div>
  );
};

export { Box };
