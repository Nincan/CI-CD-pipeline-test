"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTool(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTool" }, props, { children: (0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.47 13.79l.16-.16.16-.16c.088-.089-.063-.498-.337-.914l-.704-1.068c-.274-.416-.707-.797-.968-.852l-.472-.1-2.12-2.119-.772.773 2.118 2.119.1.472c.056.26.438.694.854.968l1.068.705c.416.273.825.424.913.336zM.472 2.745l3.57 3.566L6.31 4.04 2.746.471A1.607 1.607 0 1 0 .472 2.745z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.868 3.02c-.038-.496-.477-.593-.829-.24l-1.23 1.23a.736.736 0 0 1-1.04 0l-.798-.796a.74.74 0 0 1 0-1.045l1.27-1.271c.353-.352.264-.807-.231-.866a3.248 3.248 0 0 0-3.627 2.936 3.32 3.32 0 0 0 .04.888l-6.828 6.83c-.36.36-.56.84-.56 1.35 0 .51.2.988.559 1.348a1.912 1.912 0 0 0 2.7 0s4.908-4.908 6.896-6.898c.312.042.628.04.94-.01a3.24 3.24 0 0 0 2.737-3.455zM2.59 12.798a.995.995 0 0 1-1.407-1.405.996.996 0 0 1 1.405 0 .996.996 0 0 1 .002 1.405z" }, void 0)] }, void 0) }), void 0));
}
exports.default = SolidTool;
