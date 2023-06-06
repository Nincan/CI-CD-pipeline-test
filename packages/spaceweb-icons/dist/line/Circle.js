"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Circle.svg instead.
 */
function LineCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 14a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7ZM7 1.408A5.592 5.592 0 1 0 12.592 7 5.599 5.599 0 0 0 7 1.408Z" }, void 0) }), void 0));
}
exports.default = LineCircle;
