"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandDowJonesCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandDowJonesCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { width: "14", height: "14", fill: "#02a3d5", rx: "7" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M5.026 4.369H7.64a1.353 1.353 0 011.296.972 1.479 1.479 0 01.048.343h1.306a2.505 2.505 0 00-.028-.39 2.642 2.642 0 00-2.622-2.25H3.7v7.913h2.65V9.65H5.027z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M8.974 7v1.287a1.319 1.319 0 01-1.307 1.354v1.31A2.686 2.686 0 0010.3 8.306V7zm-1.307 3.957v-.006c-.019 0-.037.006-.057.006z" })] })));
}
exports.default = BrandDowJonesCircleClr;
