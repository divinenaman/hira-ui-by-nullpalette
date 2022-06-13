import React from "react";
import { IDefaultProps } from "../../../types/Props";

import "./index.scss";

type TSlideTypes = "left" | "right" | "top" | "bottom";
type TDisplayTypes = "hover" | "always-show"; 

interface IOverlayProps extends IDefaultProps {
  displayType?: TDisplayTypes;
  slide?: TSlideTypes;
  overlayComponent?: React.ReactNode;
  overlayBackgroundColor?: string;
  showHelperBoundaries?: boolean;
  children: React.ReactNode;
}

export function Overlay({
  displayType = "always-show",
  slide = "bottom",
  overlayComponent = "",
  overlayBackgroundColor = "transparent",
  showHelperBoundaries = false,
  children,
  className = "",
  style = {},
}: IOverlayProps) {
  return (
    <div
      className={`hira-overlay ${className}`}
      style={{ ...style }}
      data-display={displayType}
      data-help={showHelperBoundaries}
    >
      <div className={"hira-overlay_content"}>{children}</div>
      <div
        className={"hira-overlay_component"}
        style={{ background: overlayBackgroundColor }}
        data-slide={slide}
      >
        {overlayComponent}
      </div>
    </div>
  );
}
