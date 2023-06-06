"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandGoogleAnalytics(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandGoogleAnalytics" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 5.33c.875 0 1.67.673 1.67 1.75v5.09C8.67 13.442 7.797 14 7 14c-.86 0-1.67-.655-1.67-1.83V7c0-.928.795-1.67 1.67-1.67zm-4.375 5.33a1.67 1.67 0 110 3.34 1.67 1.67 0 010-3.34zM11.375 0c.875 0 1.67.673 1.67 1.75v10.42c0 1.273-.875 1.83-1.67 1.83-.86 0-1.67-.654-1.67-1.83V1.67c0-.928.796-1.67 1.67-1.67z" }, void 0) }), void 0));
}
exports.default = BrandGoogleAnalytics;
