import { jsx as _jsx } from "react/jsx-runtime";
var ETextVariants;
(function (ETextVariants) {
    ETextVariants[ETextVariants["sm"] = 12] = "sm";
    ETextVariants[ETextVariants["md"] = 16] = "md";
    ETextVariants[ETextVariants["lg"] = 32] = "lg";
})(ETextVariants || (ETextVariants = {}));
export default function Text({ color = "black", size = "", weight = "normal", style = {}, variant = "sm", children, className = "", }) {
    const fontSize = size || ETextVariants[variant];
    return (_jsx("p", { className: className, style: { color, fontSize, fontWeight: weight, ...style }, children: children }));
}
