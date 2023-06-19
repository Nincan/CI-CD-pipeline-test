"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandBingCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandBingCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "6.957", fill: "#f4bd27" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M5.971 11.335L3.997 9.952V2.665l1.986.608v4.9L4.055 9.891 8.76 7.416l-1.304-.59-.883-1.915 4.361 1.337v2.131l-4.963 2.956z" })] })));
}
exports.default = BrandBingCircleClr;
