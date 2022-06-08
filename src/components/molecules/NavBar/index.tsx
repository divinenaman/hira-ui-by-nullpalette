import React, { useState } from "react";

import { IDefaultProps } from "../../../types/Props";

import { HamburgerIcon } from "../../";

import "./index.scss";

interface INavBarProps extends IDefaultProps {
  height?: string | number;
  width?: string | number;
  numOfLinkColumns?: number;
  brandingSection?: string | React.ReactNode;
  menuPosition?: "left" | "right";
  menuSize?: number | string;
  menuColor?: string;
  children: React.ReactNode;
  showHelperBoundaries?: boolean;
}

export function NavBar({
  width = "100%",
  height = 200,
  brandingSection = "",
  menuPosition = "left",
  menuSize = 24,
  menuColor = "grey",
  style = {},
  children,
  className = "",
  showHelperBoundaries = false,
}: INavBarProps) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`hira-navbar ${className}`}
      style={{ width, ...style }}
      data-help={showHelperBoundaries}
    >
      <div
        className="hira-navbar_branding"
        style={{ height }}
        data-menu={menuPosition}
      >
        <div
          className="hira-navbar_menu"
          onClick={() => setActive(!active)}
          tabIndex={1}
        >
          <HamburgerIcon
            size={menuSize}
            color={menuColor}
            style={{ padding: 10 }}
          />
        </div>
        {brandingSection}
      </div>
      <div className="hira-navbar_link" data-active={active}>
        {children}
      </div>
    </div>
  );
}
