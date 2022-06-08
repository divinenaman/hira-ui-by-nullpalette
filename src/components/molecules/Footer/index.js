import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./index.scss";
export function FooterLinkColumn({ title = "", style = {}, children, className, }) {
    return (_jsxs("div", { className: `hira-footer_link_column ${className}`, style: style, children: [_jsx("div", { className: `hira-footer_link_column_title`, children: title }), _jsx("div", { className: `hira-footer_link_column_link`, children: children })] }));
}
export function Footer({ width = "100%", height = 400, brandingSection = "", copyrightSection = "", numOfLinkColumns = 2, style = {}, children, className = "", showHelperBoundaries = false, }) {
    return (_jsxs("div", { className: `hira-footer ${className}`, style: { width, height, ...style }, "data-help": showHelperBoundaries, children: [_jsx("div", { className: "hira-footer_branding", children: brandingSection }), _jsx("div", { className: "hira-footer_link", style: { gridTemplateColumns: `repeat(${numOfLinkColumns}, 1fr)` }, children: children }), _jsx("div", { className: "hira-footer_copyright", children: copyrightSection })] }));
}
