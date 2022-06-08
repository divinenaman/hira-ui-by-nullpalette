import { jsx as _jsx } from "react/jsx-runtime";
export default function Button({ backgroundColor = "black", children, }) {
    return (_jsx("button", { style: { backgroundColor, color: "white" }, children: children }));
}
