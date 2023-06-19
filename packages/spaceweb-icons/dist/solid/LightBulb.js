"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLightBulb(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 10.317 14", "data-icon-name": "SolidLightBulb" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.343 1.841a.553.553 0 100 1.106A2.025 2.025 0 017.37 4.973a.553.553 0 001.105 0 3.139 3.139 0 00-3.132-3.132zM4.053.117A5.16 5.16 0 018.35 9.21a2.458 2.458 0 00-.943 1.474H2.949a.125.125 0 00-.052.007 2.223 2.223 0 00-.84-1.415A5.154 5.154 0 014.054.117zM7.37 11.789v.921A1.296 1.296 0 016.08 14H4.238a1.343 1.343 0 01-1.29-1.503v-.708z", fillRule: "evenodd" }) })));
}
exports.default = SolidLightBulb;
