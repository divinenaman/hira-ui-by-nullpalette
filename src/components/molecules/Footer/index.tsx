import React from "react";

import { IDefaultProps } from "../../../types/Props";

import "./index.scss";

interface IFooterProps extends IDefaultProps {
  height?: string | number;
  width?: string | number;
  numOfLinkColumns?: number;
  brandingSection?: string | React.ReactNode;
  copyrightSection?: string | React.ReactNode;
  children: React.ReactNode;
  showHelperBoundaries?: boolean;
}

interface IFooterLinkColumnProps extends IDefaultProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
}

export function FooterLinkColumn({
  title = "",
  style = {},
  children,
  className = "",
}: IFooterLinkColumnProps) {
  return (
    <div className={`hira-footer_link_column ${className}`} style={style}>
      <div className={`hira-footer_link_column_title`}>{title}</div>
      <div className={`hira-footer_link_column_link`}>{children}</div>
    </div>
  );
}

export function Footer({
  width = "100%",
  height = 400,
  brandingSection = "",
  copyrightSection = "",
  numOfLinkColumns = 2,
  style = {},
  children,
  className = "",
  showHelperBoundaries = false,
}: IFooterProps) {
  return (
    <div
      className={`hira-footer ${className}`}
      style={{ width, height, ...style }}
      data-help={showHelperBoundaries}
    >
      <div className="hira-footer_branding">{brandingSection}</div>

      <div
        className="hira-footer_link"
        style={{ gridTemplateColumns: `repeat(${numOfLinkColumns}, 1fr)` }}
      >
        {children}
      </div>

      <div className="hira-footer_copyright">{copyrightSection}</div>
    </div>
  );
}
