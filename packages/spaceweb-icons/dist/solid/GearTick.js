"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGearTick(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGearTick" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.2 7.69a5.33 5.33 0 0 0 .05-.69 5.053 5.053 0 0 0-.05-.68l1.48-1.16a.353.353 0 0 0 .08-.45l-1.4-2.42a.354.354 0 0 0-.43-.15l-1.74.7a5.357 5.357 0 0 0-1.18-.69L8.75.3A.363.363 0 0 0 8.4 0H5.6a.364.364 0 0 0-.35.29l-.26 1.85a5.138 5.138 0 0 0-1.18.69l-1.74-.7a.354.354 0 0 0-.43.15L.24 4.7a.353.353 0 0 0 .08.45L1.8 6.31a5.343 5.343 0 0 0-.05.69 5.066 5.066 0 0 0 .05.68L.32 8.84a.353.353 0 0 0-.08.45l1.4 2.42a.354.354 0 0 0 .43.15l1.74-.7a5.36 5.36 0 0 0 1.18.69l.26 1.85a.363.363 0 0 0 .35.3h2.8a.364.364 0 0 0 .35-.29l.26-1.85a5.146 5.146 0 0 0 1.18-.69l1.74.7a.354.354 0 0 0 .43-.15l1.4-2.42a.353.353 0 0 0-.08-.45ZM9.628 6.017 6.672 8.973l-.002.002-.001.002a.677.677 0 0 1-.136.088.715.715 0 0 1-.094.062.697.697 0 0 1-.527-.001.744.744 0 0 1-.07-.047.678.678 0 0 1-.16-.106l-.001-.002-.003-.002-1.31-1.333a.7.7 0 0 1 .998-.982l.815.83 2.457-2.457a.7.7 0 0 1 .99.99Z" }) })));
}
exports.default = SolidGearTick;
