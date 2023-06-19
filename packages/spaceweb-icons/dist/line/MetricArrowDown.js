"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineMetricArrowDown(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineMetricArrowDown" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "m9.29 13.963 4.077-1.166a.875.875 0 0 0 .6-1.079L12.802 7.64a.873.873 0 1 0-1.682.473l.003.008.449 1.572-5.269-2.95 1.242-1.241a1.164 1.164 0 0 0-.204-1.81L1.81.2a1.165 1.165 0 0 0-1.29 1.94l.046.03 4.3 2.716-1.298 1.3a1.165 1.165 0 0 0 .254 1.84l6.72 3.762-1.732.495a.874.874 0 0 0 .48 1.68Z" }) })));
}
exports.default = LineMetricArrowDown;
