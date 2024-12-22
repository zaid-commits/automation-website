import React from 'react';

export const Button = ({ children, variant = "default" }) => {
  const baseStyle = "px-4 py-2 rounded";
  const variantStyle = variant === "outline" ? "border border-gray-500" : "bg-blue-500 text-white";
  return (
    <button className={}>
      {children}
    </button>
  );
};
