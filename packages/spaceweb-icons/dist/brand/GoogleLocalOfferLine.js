"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGoogleLocalOfferLine(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGoogleLocalOfferLine" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.49 6.76L7.24 1.5c-.21-.22-.5-.34-.82-.34H2.33c-.64 0-1.16.52-1.16 1.16v4.09c0 .32.12.6.34.82l5.25 5.25a1.16 1.16 0 001.65 0l4.08-4.08a1.18 1.18 0 000-1.65zm-4.9 4.91L2.32 6.42V2.33h4.09l5.25 5.25-4.09 4.1z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "3.79", cy: "3.79", r: ".88" })] })));
}
exports.default = BrandGoogleLocalOfferLine;
