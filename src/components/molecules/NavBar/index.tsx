import React, { useState } from "react";

import { IDefaultProps } from "../../../types/Props";

import "./index.scss";

interface INavBarProps extends IDefaultProps {
  height?: string | number;
  width?: string | number;
  numOfLinkColumns?: number;
  brandingSection: string | React.ReactNode;
  hamburgerPosition: "left" | "right";
  children: React.ReactNode;
  showHelperBoundaries?: boolean;
}

export function NavBar({
  width = "100%",
  height = 200,
  brandingSection = "",
  hamburgerPosition = "left",
  style = {},
  children,
  className = "",
  showHelperBoundaries = false,
}: INavBarProps) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`hira-navbar ${className}`}
      style={{ width, height, ...style }}
      data-help={showHelperBoundaries}
    >
      <div className="hira-navbar_branding" data-ham={hamburgerPosition}>
        <div
          className="hira-navbar_hamburger"
          onClick={() => setActive(!active)}
          tabIndex={1}
        >
          click
        </div>
        {brandingSection}
      </div>
      <div className="hira-navbar_link" data-active={active}>
        {children}
      </div>
    </div>
  );
}
