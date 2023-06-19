"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandCommerceCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandCommerceCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40A3F5", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fill: "#FFF" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.286 3.22c.066 0 .122.047.13.11l.198 1.411h5.369l-.282 2.441h-.006l-.064.5-4.397.522a.13.13 0 00-.115.145l.118.836a.131.131 0 00.13.112h4.111v.536H4.883a.131.131 0 01-.13-.112l-.82-5.854a.131.131 0 00-.131-.112h-.808V3.22h1.292z" }), (0, jsx_runtime_1.jsx)("ellipse", { cx: "8.698", cy: "10.938", rx: ".557", ry: ".544" }), (0, jsx_runtime_1.jsx)("ellipse", { cx: "5.356", cy: "10.938", rx: ".557", ry: ".544" })] }))] })));
}
exports.default = BrandCommerceCircleClr;
