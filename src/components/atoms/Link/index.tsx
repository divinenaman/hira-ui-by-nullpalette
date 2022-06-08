import React from "react";

interface ILinkProps {
  to: string;
  targetNewTab?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

export default function Link({
  to,
  targetNewTab = false,
  style = {},
  children,
  className = "",
}: ILinkProps) {
  return (
    <a
      className={className}
      target={targetNewTab ? "_blank" : "_self"}
      style={{
        textDecoration: "none",
        color: "inherit",
        fontSize: 12,
        ...style,
      }}
      href={to}
    >
      {children}
    </a>
  );
}
