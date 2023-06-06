"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTaskTick(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTaskTick" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0A6.997 6.997 0 0 0 .064 6.098H0V14h7.137v-.007A6.997 6.997 0 0 0 7 0Zm3.255 5.614L6.542 9.326a.897.897 0 0 1-1.272 0L3.736 7.792a.708.708 0 0 1 0-.997.71.71 0 0 1 .997.002L5.91 7.972l3.358-3.357a.702.702 0 1 1 .987.999Z" }, void 0) }), void 0));
}
exports.default = SolidTaskTick;
