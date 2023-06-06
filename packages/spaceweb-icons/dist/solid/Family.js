"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidFamily(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidFamily" }, props, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", (0, tslib_1.__assign)({ id: "solid_family__a" }, { children: (0, jsx_runtime_1.jsx)("path", { fill: "none", d: "M0 0h14v14H0z" }, void 0) }), void 0) }, void 0), (0, jsx_runtime_1.jsx)("g", (0, tslib_1.__assign)({ clipPath: "url(#solid_family__a)" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.746 1.392a1.392 1.392 0 1 1 1.393 1.393 1.388 1.388 0 0 1-1.393-1.393Zm2.785 11.835v-3.48h.773a.7.7 0 0 0 .661-.92l-1.462-4.392a1.399 1.399 0 0 0-1.322-.954h-.084a1.392 1.392 0 0 0-1.323.954L9.176 6.23a2.427 2.427 0 0 1 1.267 2.123v5.57h1.392a.698.698 0 0 0 .696-.697ZM7.31 6.614a1.044 1.044 0 1 0-1.044-1.045A1.043 1.043 0 0 0 7.31 6.614Zm-4.873-3.83a1.392 1.392 0 1 0-1.393-1.392 1.388 1.388 0 0 0 1.393 1.393Zm1.392 10.443V9.05h.348a.698.698 0 0 0 .696-.696v-3.48A1.396 1.396 0 0 0 3.481 3.48H1.392A1.396 1.396 0 0 0 0 4.873v3.481a.698.698 0 0 0 .696.696h.348v4.177a.698.698 0 0 0 .696.696h1.393a.698.698 0 0 0 .696-.696Zm1.74-4.873v2.089a.698.698 0 0 0 .697.696v2.088a.698.698 0 0 0 .696.696h.696a.698.698 0 0 0 .696-.696V11.14a.698.698 0 0 0 .696-.696V8.354A1.052 1.052 0 0 0 8.006 7.31H6.614a1.052 1.052 0 0 0-1.045 1.044Z" }, void 0) }), void 0)] }), void 0));
}
exports.default = SolidFamily;
