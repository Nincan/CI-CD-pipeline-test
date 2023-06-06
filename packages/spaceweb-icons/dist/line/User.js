"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/User.svg instead.
 */
function LineUser(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineUser" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 7C5.372 7 4.047 5.675 4.047 4.047S5.372 1.094 7 1.094s2.953 1.324 2.953 2.953S8.628 7 7 7zm4.95 2.05a6.973 6.973 0 00-2.66-1.668A4.045 4.045 0 007 0a4.045 4.045 0 00-2.29 7.382A6.973 6.973 0 002.05 9.05 6.954 6.954 0 000 14h1.094A5.913 5.913 0 017 8.094 5.913 5.913 0 0112.906 14H14c0-1.87-.728-3.628-2.05-4.95z" }, void 0) }), void 0));
}
exports.default = LineUser;
