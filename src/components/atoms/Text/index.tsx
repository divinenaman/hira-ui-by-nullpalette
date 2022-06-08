import React from "react";

type TTextVariantTypes = "sm" | "md" | "lg";

enum ETextVariants {
  sm = 12,
  md = 16,
  lg = 32,
}

interface ITextProps {
  size?: string;
  color?: string;
  weight?: string | number;
  style?: React.CSSProperties;
  className: string;
  children: React.ReactNode;
  variant?: TTextVariantTypes;
}

export default function Text({
  color = "black",
  size = "",
  weight = "normal",
  style = {},
  variant = "sm",
  children,
  className = "",
}: ITextProps) {
  const fontSize = size || ETextVariants[variant];

  return (
    <p
      className={className}
      style={{ color, fontSize, fontWeight: weight, ...style }}
    >
      {children}
    </p>
  );
}
