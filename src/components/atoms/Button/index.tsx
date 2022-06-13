import React from "react";

interface IButtonProps {
  backgroundColor?: string;
  children: React.ReactNode;
}

export function Button({ backgroundColor = "black", children }: IButtonProps) {
  return (
    <button style={{ backgroundColor, color: "white" }}>
      <p className="text-2xl text-yellow-500">{children}</p>
    </button>
  );
}
