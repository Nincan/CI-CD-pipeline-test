"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidBank(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidBank" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.938 6.913v2.7a1.012 1.012 0 1 0 2.025 0v-2.7a1.012 1.012 0 0 0-2.025 0Zm4.05 0v2.7a1.012 1.012 0 1 0 2.024 0v-2.7a1.012 1.012 0 0 0-2.024 0ZM1.6 14h10.8a1.012 1.012 0 0 0 0-2.025H1.6A1.012 1.012 0 1 0 1.6 14Zm8.437-7.087v2.7a1.012 1.012 0 1 0 2.025 0v-2.7a1.012 1.012 0 1 0-2.025 0ZM6.372.157 1.04 2.965a.84.84 0 0 0 .392 1.586h11.143a.84.84 0 0 0 .385-1.586L7.628.157a1.334 1.334 0 0 0-1.256 0Z" }, void 0) }), void 0));
}
exports.default = SolidBank;
