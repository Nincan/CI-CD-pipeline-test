"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGridRow1x2Left(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGridRow1x2Left" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.6 4.468a.499.499 0 00-.195-.04H.575a.5.5 0 00-.5.5l.004.015V9.28a.5.5 0 00.5.5h12.83a.5.5 0 00.5-.5V4.93a.5.5 0 00-.309-.46zm-12.521.96h3.199V8.78h-3.2zM5.278 8.78V5.43h7.63v3.35z" }) })));
}
exports.default = SolidGridRow1x2Left;
