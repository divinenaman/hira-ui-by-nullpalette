import React from "react";

export interface IDefaultProps {
  style?: React.CSSProperties;
  className?: string;
}

export interface IDefaultIconProps extends IDefaultProps {
  color?: string;
  size?: number | string;
}