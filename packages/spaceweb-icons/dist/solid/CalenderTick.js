"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCalenderTick(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCalenderTick" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.446 10.773a.795.795 0 0 0 1.127 0l3.289-3.288a.622.622 0 0 0 .19-.441.624.624 0 0 0-1.064-.443L6.013 9.573 4.97 8.534a.624.624 0 0 0-.883.881Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.9 1.4h-.7V.7a.7.7 0 1 0-1.4 0v.7H4.2V.7a.7.7 0 0 0-1.4 0v.7h-.7A1.394 1.394 0 0 0 .707 2.8L.7 12.6A1.4 1.4 0 0 0 2.1 14h9.8a1.404 1.404 0 0 0 1.4-1.4V2.8a1.404 1.404 0 0 0-1.4-1.4Zm0 10.5a.702.702 0 0 1-.7.7H2.8a.702.702 0 0 1-.7-.7v-7h9.8Z" })] })));
}
exports.default = SolidCalenderTick;
