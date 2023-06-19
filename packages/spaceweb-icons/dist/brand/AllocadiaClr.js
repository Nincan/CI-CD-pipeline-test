"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandAllocadiaClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandAllocadiaClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.667 9.325a2.333 2.333 0 0 1 0-4.667V2.325a4.683 4.683 0 1 0 4.666 4.683H7a2.328 2.328 0 0 1-2.333 2.317Z", fill: "#519f2e" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.333 2.309a4.678 4.678 0 0 0-4.666 4.683H7a2.333 2.333 0 1 1 2.333 2.333v2.333a4.675 4.675 0 0 0 0-9.35Z", fill: "#519f2e" })] })));
}
exports.default = BrandAllocadiaClr;
