"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function ProductModCommerce(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "ProductModCommerce" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.268 0c.112 0 .207.08.222.189l.334 2.39h9.098l-.478 4.137h-.011l-.107.845-7.451.885a.22.22 0 00-.195.247l.199 1.417c.015.108.11.188.221.188h6.966v.909H4.28a.222.222 0 01-.222-.189L2.67 1.098a.222.222 0 00-.221-.19h-1.37V0h2.19z" }, void 0), (0, jsx_runtime_1.jsx)("ellipse", { cx: "10.745", cy: "13.079", rx: ".944", ry: ".921" }, void 0), (0, jsx_runtime_1.jsx)("ellipse", { cx: "5.082", cy: "13.079", rx: ".944", ry: ".921" }, void 0)] }), void 0));
}
exports.default = ProductModCommerce;
