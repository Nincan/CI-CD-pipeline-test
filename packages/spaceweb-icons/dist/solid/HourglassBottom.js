"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidHourglassBottom(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidHourglassBottom" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.8 14a1.404 1.404 0 001.4-1.4l-.007-2.226a1.41 1.41 0 00-.406-.987L8.4 7l2.387-2.401a1.399 1.399 0 00.406-.987L11.2 1.4A1.404 1.404 0 009.8 0H4.2a1.404 1.404 0 00-1.4 1.4v2.212a1.427 1.427 0 00.406.994L5.6 7 3.213 9.38a1.404 1.404 0 00-.413.994V12.6A1.404 1.404 0 004.2 14zM4.2 3.563V2.1a.702.702 0 01.7-.7h4.2a.702.702 0 01.7.7v1.463a.723.723 0 01-.203.497L7 6.65 4.403 4.053a.706.706 0 01-.203-.49z" }, void 0) }), void 0));
}
exports.default = SolidHourglassBottom;
