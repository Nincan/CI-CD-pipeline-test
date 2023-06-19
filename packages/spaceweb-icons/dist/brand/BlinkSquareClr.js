"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandBlinkSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandBlinkSquareClr" }, props, { children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsxs)("linearGradient", tslib_1.__assign({ id: "brand_blinkSquare_clr__a", x1: "-18.28", y1: "-3.154", x2: "-18.28", y2: "-2.462", gradientTransform: "matrix(20 0 0 -20 372.592 -49.178)", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0", stopColor: "#5a5a5a" }), (0, jsx_runtime_1.jsx)("stop", { offset: ".146", stopColor: "#494949" }), (0, jsx_runtime_1.jsx)("stop", { offset: ".52", stopColor: "#212121" }), (0, jsx_runtime_1.jsx)("stop", { offset: ".817", stopColor: "#090909" }), (0, jsx_runtime_1.jsx)("stop", { offset: "1" })] })), (0, jsx_runtime_1.jsxs)("linearGradient", tslib_1.__assign({ id: "brand_blinkSquare_clr__b", x1: "-15.052", y1: "-5.709", x2: "-14.557", y2: "-6.204", gradientTransform: "matrix(3.70125 0 0 -3.70125 63.366 -18.125)", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0", stopColor: "#e52f08" }), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#e94f96" })] }))] }), (0, jsx_runtime_1.jsx)("path", { d: "M0 0h14v14H0Z", fill: "url(#brand_blinkSquare_clr__a)" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.12 5.82a2.743 2.743 0 0 0-1.298.327V3.04H4.375v5.525A2.746 2.746 0 1 0 7.121 5.82Zm0 4.067a1.322 1.322 0 1 1 1.322-1.321 1.322 1.322 0 0 1-1.321 1.321Z", fill: "#fff" }), (0, jsx_runtime_1.jsx)("circle", { cx: "8.572", cy: "3.92", r: "1.295", fill: "url(#brand_blinkSquare_clr__b)" })] })));
}
exports.default = BrandBlinkSquareClr;
