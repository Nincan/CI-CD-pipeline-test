"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGoogleAds(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGoogleAds" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { width: "4.688", height: "13.956", x: "2.328", y: ".039", rx: "2.344", transform: "rotate(30 4.672 7.017)" }), (0, jsx_runtime_1.jsx)("rect", { width: "4.688", height: "13.956", x: "6.987", y: ".004", rx: "2.344", transform: "rotate(-30 9.33 6.983)" }), (0, jsx_runtime_1.jsx)("circle", { cx: "2.386", cy: "10.996", r: "2.376" })] })));
}
exports.default = BrandGoogleAds;
