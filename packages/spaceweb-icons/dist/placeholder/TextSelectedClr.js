"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderTextSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 27 31", "data-icon-name": "PlaceholderTextSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#CBD756", d: "M20.207.5H2C1.06.5.5 1.06.5 2v29h26V6.793L20.207.5zM5 6h9v1H5V6zm0 13h9v1H5v-1zm17 7.5H5v-1h17v1zm0-3H5v-1h17v1zm0-10H5v-1h17v1zm0-3H5v-1h17v1z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M19 1.997c0-1.655.946-2.05 2.121-.875l4.758 4.756C27.05 7.05 26.652 8 25.003 8h-3.006A3 3 0 0119 5.003V1.997z" })] })));
}
exports.default = PlaceholderTextSelectedClr;
