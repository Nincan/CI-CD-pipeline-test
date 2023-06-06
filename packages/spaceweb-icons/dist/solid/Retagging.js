"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidRetagging(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidRetagging" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.498 2.244a4.908 4.908 0 013.46 1.944l1.86-1.06A6.75 6.75 0 007.499.046zM11.472 5.042a4.872 4.872 0 01.104 3.969l1.731.997a6.668 6.668 0 00.002-6.013zM3.127 4.144A4.9 4.9 0 016.502 2.25V.052A6.74 6.74 0 001.27 3.074zM6.502 12.032A4.884 4.884 0 012.946 9.9l-1.713.976a6.741 6.741 0 005.269 3.072zM11.108 9.892a4.879 4.879 0 01-3.61 2.147v1.914a6.748 6.748 0 005.318-3.077zM2.476 9.021a4.876 4.876 0 01.123-4.03L.766 3.933A6.694 6.694 0 00.74 10.01z" }, void 0) }), void 0));
}
exports.default = SolidRetagging;
