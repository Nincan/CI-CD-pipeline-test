"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidErrorClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidErrorClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#FF6060", d: "M6.304 1.636c.385-.63 1.008-.63 1.391-.002l2.147 3.52 3.987 6.541c.385.63.097 1.142-.64 1.142H.81c-.737 0-1.024-.51-.639-1.142l6.133-10.06z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M6.69 9.895h.843v.841H6.69zm0-4.624h.843v3.783H6.69z" })] })));
}
exports.default = SolidErrorClr;
