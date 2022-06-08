import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./index.scss";
export function NavBar({ width = "100%", height = 200, brandingSection = "", hamburgerPosition = "left", style = {}, children, className = "", showHelperBoundaries = false, }) {
    const [active, setActive] = useState(false);
    return (_jsxs("div", { className: `hira-navbar ${className}`, style: { width, height, ...style }, "data-help": showHelperBoundaries, children: [_jsxs("div", { className: "hira-navbar_branding", "data-ham": hamburgerPosition, children: [_jsx("div", { className: "hira-navbar_hamburger", onClick: () => setActive(!active), tabIndex: 1, children: "click" }), brandingSection] }), _jsx("div", { className: "hira-navbar_link", "data-active": active, children: children })] }));
}
