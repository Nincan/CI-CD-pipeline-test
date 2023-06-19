"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/ScreenControl.svg instead.
 */
function LineClick(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineClick" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.52 4.32c-.2 0-.4.04-.56.12a1.42 1.42 0 00-1.32-.9c-.22 0-.43.05-.61.14A1.41 1.41 0 007.32 3V1.42A1.42 1.42 0 005.9 0a1.42 1.42 0 00-1.4 1.42v5.64L3.47 5.9a1.42 1.42 0 00-1.03-.44c-.38 0-.73.14-1 .4-.47.48-.5 1.17-.07 1.91.55.96 1.14 1.87 1.67 2.67a36.58 36.58 0 011 1.6c.24.39.85 1.67.85 1.69a.48.48 0 00.44.27h6.04a.48.48 0 00.46-.33c.1-.35 1.1-3.46 1.1-4.66V5.75a1.42 1.42 0 00-1.41-1.43zm-.46 1.42c0-.25.2-.46.45-.46s.46.2.46.46v3.27c0 .8-.61 2.94-.95 4.03h-5.4c-.2-.4-.56-1.17-.74-1.49a36.85 36.85 0 00-1.04-1.63c-.52-.8-1.1-1.68-1.64-2.62-.14-.24-.26-.57-.08-.76a.47.47 0 01.64 0l1.85 2.11a.48.48 0 00.83-.31V1.42c0-.25.2-.46.46-.46.25 0 .46.2.46.46V5.9a.48.48 0 00.95 0V4.34c0-.26.21-.47.46-.47s.46.21.46.47V6.5a.48.48 0 10.96 0V4.96c0-.26.2-.47.45-.47s.46.21.46.47v2.18a.48.48 0 00.96 0v-1.4z" }) })));
}
exports.default = LineClick;
