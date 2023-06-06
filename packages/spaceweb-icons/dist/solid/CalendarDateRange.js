"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCalendarDateRange(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCalendarDateRange" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.9 6.3H3.5v1.4h1.4Zm2.8 0H6.3v1.4h1.4Zm2.8 0H9.1v1.4h1.4Zm1.4-4.9h-.7V0H9.8v1.4H4.2V0H2.8v1.4h-.7A1.394 1.394 0 0 0 .707 2.8L.7 12.6A1.4 1.4 0 0 0 2.1 14h9.8a1.404 1.404 0 0 0 1.4-1.4V2.8a1.404 1.404 0 0 0-1.4-1.4Zm0 11.2H2.1V4.9h9.8Z" }, void 0) }), void 0));
}
exports.default = SolidCalendarDateRange;
