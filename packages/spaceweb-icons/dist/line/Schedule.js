"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Schedule.svg instead.
 */
function LineSchedule(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 12 12", "data-icon-name": "LineSchedule" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6 0C2.691 0 0 2.691 0 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.5 6.071V2.65a.5.5 0 10-1 0v3.63a.5.5 0 00.147.353l1.72 1.72a.498.498 0 00.706 0 .5.5 0 000-.707L6.5 6.07z" })] })));
}
exports.default = LineSchedule;
