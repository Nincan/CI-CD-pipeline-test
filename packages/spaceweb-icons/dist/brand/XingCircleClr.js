"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandXingCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandXingCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#085D5C", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.304 4.286l-1.88-.014L4.46 6.247 3.01 8.599l1.881.014 1.45-2.352zm3.703-1.473l1.981.015-2.954 5.101 1.888 3.258-1.978-.015-1.89-3.257z", fill: "#FFF" })] })));
}
exports.default = BrandXingCircleClr;
