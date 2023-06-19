"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandMonoprixClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandMonoprixClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#d02e26", d: "M2.5 2.25a4.63 4.63 0 00-.75 2.28 4.92 4.92 0 00.54 2.5 5.28 5.28 0 004.55 2.3 2.87 2.87 0 01.86.07.86.86 0 01.26.97 5.04 5.04 0 01-1.15 1.98 9.85 9.85 0 01-1.18 1.16c-.2.15-.41.19-.24.41.15.19.46 0 .67-.08a9.71 9.71 0 005.47-5.4 8.24 8.24 0 00.73-3.24C12.22 1.8 9.92-.27 6.3.03a4.97 4.97 0 00-3.8 2.22z" }) })));
}
exports.default = BrandMonoprixClr;
