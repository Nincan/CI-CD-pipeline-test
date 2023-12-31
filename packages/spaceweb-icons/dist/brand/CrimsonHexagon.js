"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandCrimsonHexagon(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandCrimsonHexagon" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.597 11.66.348 9.499l1.249-2.164h2.498l1.248 2.163-1.25 2.162H1.597Zm-.072-4.854L.277 4.643 1.526 2.48h2.497l1.25 2.164-1.25 2.161Zm4.319-2.481L4.597 2.163 5.844 0H8.34l1.25 2.163-1.248 2.164ZM5.794 14l-1.248-2.162 1.247-2.164h2.499l1.247 2.162L8.291 14Zm4.183-7.124L8.729 4.714l1.25-2.161 2.496-.002 1.248 2.163-1.249 2.163H9.977Zm-.04 4.784-1.25-2.162 1.25-2.162 2.496-.001 1.249 2.162-1.25 2.162-2.495.002Z" }) })));
}
exports.default = BrandCrimsonHexagon;
