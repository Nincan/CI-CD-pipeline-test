"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidBattery(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidBattery" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.9 10.5H.7a.702.702 0 0 1-.7-.7V4.2a.702.702 0 0 1 .7-.7h11.2a.702.702 0 0 1 .7.7v1.4h.7a.702.702 0 0 1 .7.7v1.4a.702.702 0 0 1-.7.7h-.7v1.4a.702.702 0 0 1-.7.7Zm-.7-1.4V4.9H8.4v4.2Z" }) })));
}
exports.default = SolidBattery;
