import React, { ReactElement } from "react";
import { IDefaultIconProps } from "../../types/Props";

export function HamburgerIcon({
  color = "currentColor",
  size = 24,
  style = {},
  className = "",
}: IDefaultIconProps): ReactElement {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="2" width="20" height="2" rx="1" fill={color} />
      <rect y="9" width="20" height="2" rx="1" fill={color} />
      <rect y="16" width="20" height="2" rx="1" fill={color} />
    </svg>
  );
}
