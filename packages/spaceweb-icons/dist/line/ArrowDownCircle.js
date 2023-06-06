"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineArrowDownCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineArrowDownCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.316 6.898 7.674 8.541V3.822a.7.7 0 0 0-1.4 0V8.49l-1.59-1.59a.7.7 0 1 0-.99.989l2.785 2.785a.71.71 0 0 0 .495.205c.009 0 .017-.005.026-.005.009 0 .017.005.026.005a.698.698 0 0 0 .495-.205l2.784-2.785a.7.7 0 0 0-.989-.99Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12.6A5.6 5.6 0 1 1 12.6 7 5.607 5.607 0 0 1 7 12.6Z" }, void 0)] }), void 0));
}
exports.default = LineArrowDownCircle;
