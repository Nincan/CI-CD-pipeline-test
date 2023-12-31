"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFallbackAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFallbackAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.437 6.997c0-1.843-.003-3.686.002-5.529.002-.5.205-.912.61-1.213.197-.145.42-.237.668-.24C2.61.01 3.505.003 4.398.002c1.49-.002 2.978 0 4.467 0 .37 0 .707.096.985.352.189.175.374.354.561.53l1.955 1.847c.24.227.483.45.72.682.28.273.437.608.468 1 .007.08.009.16.009.24 0 2.626.002 5.254-.002 7.88 0 .5-.202.913-.607 1.215a1.189 1.189 0 01-.692.245c-.11.003-.221.007-.332.007H1.874c-.37 0-.693-.11-.964-.364a1.45 1.45 0 01-.451-.867 2.25 2.25 0 01-.021-.325V6.997zM6.386 5.3A2.059 2.059 0 004.32 3.234a2.067 2.067 0 00-.002 4.134A2.062 2.062 0 006.386 5.3zm.392 5.151h4.755L9.156 6.336l-2.378 4.116z" }) })));
}
exports.default = SolidFallbackAsset;
