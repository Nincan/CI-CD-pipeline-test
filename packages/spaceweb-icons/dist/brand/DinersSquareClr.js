"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandDinersSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandDinersSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M0 0h14v14H0Z", fill: "#ebf1f8", fillRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { d: "M0 0h14v14H0Z", fill: "#fff", fillRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.827 3.51V3.5H8.13v.01a3.504 3.504 0 0 1 0 6.98v.01H5.827v-.01a3.504 3.504 0 0 1 0-6.98Z", fill: "#0165ac" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.77 8.979a2.11 2.11 0 0 0 0-3.958ZM5.388 5.02a2.11 2.11 0 0 0 0 3.958Zm.691 5.012A3.033 3.033 0 1 1 9.072 7a3.013 3.013 0 0 1-2.993 3.033Z", fill: "#fff" })] })));
}
exports.default = BrandDinersSquareClr;
