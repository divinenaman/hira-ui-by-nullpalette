import React from "react";

interface IButtonProps {
  backgroundColor?: string;
  children: React.ReactNode;
}

export default function Button({
  backgroundColor = "black",
  children,
}: IButtonProps) {
  return (
    <button style={{ backgroundColor, color: "white" }}>{children}</button>
  );
}
