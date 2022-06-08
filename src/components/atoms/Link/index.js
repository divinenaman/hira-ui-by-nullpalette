import { jsx as _jsx } from "react/jsx-runtime";
export default function Link({ to, targetNewTab = false, style = {}, children, className = "", }) {
    return (_jsx("a", { className: className, target: targetNewTab ? "_blank" : "_self", style: {
            textDecoration: "none",
            color: "inherit",
            fontSize: 12,
            ...style,
        }, href: to, children: children }));
}
