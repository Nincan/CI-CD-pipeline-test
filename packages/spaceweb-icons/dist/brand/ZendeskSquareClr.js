"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandZendeskSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandZendeskSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#03363d", d: "M0 0h14v14H0z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M6.682 5.505v4.662h-3.86l3.86-4.662zm0-1.672a1.93 1.93 0 01-3.86 0zm.636 6.334a1.928 1.928 0 013.856 0zm0-1.672V3.833h3.86l-3.86 4.662z" })] })));
}
exports.default = BrandZendeskSquareClr;
