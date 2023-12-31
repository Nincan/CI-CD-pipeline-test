"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDollarCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDollarCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.975 0a6.975 6.975 0 106.976 6.975A6.975 6.975 0 006.975 0zm.86 10.454v.22a.86.86 0 01-1.72 0v-.233a2.28 2.28 0 01-1.669-1.299.583.583 0 01.058-.544.593.593 0 01.494-.263h.138a.606.606 0 01.557.406c.163.418.595.63 1.282.63 1.124 0 1.212-.585 1.212-.763 0-.366-.166-.778-1.388-1.07-1.035-.249-2.41-.743-2.41-2.156a1.999 1.999 0 011.726-1.876v-.23a.86.86 0 011.72 0v.247A2.07 2.07 0 019.29 4.83a.569.569 0 01-.067.53.595.595 0 01-.491.256h-.148a.579.579 0 01-.545-.432c-.123-.405-.47-.603-1.063-.603-.736 0-1.211.311-1.211.791 0 .36.233.644 1.39.944 1.191.31 2.408.823 2.408 2.287a1.901 1.901 0 01-1.726 1.85z" }) })));
}
exports.default = SolidDollarCircle;
