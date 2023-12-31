"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineMetricArrow(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineMetricArrow" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.963 4.71 12.796.633a.875.875 0 0 0-1.079-.6L7.64 1.198a.873.873 0 1 0 .481 1.68l1.572-.45-2.95 5.269-1.241-1.241a1.164 1.164 0 0 0-1.81.203L.2 12.19a1.165 1.165 0 1 0 1.97 1.244l2.716-4.3 1.3 1.298a1.165 1.165 0 0 0 1.84-.254l3.762-6.72.495 1.732a.874.874 0 0 0 1.68-.48Z" }) })));
}
exports.default = LineMetricArrow;
