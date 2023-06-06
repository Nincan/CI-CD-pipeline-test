"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Copy.svg instead.
 */
function LineCopy(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineCopy" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.554 5.446V12.8H1.2V5.446h7.354m.289-1.2H.91a.91.91 0 00-.91.911v7.932c0 .503.408.911.91.911h7.933a.91.91 0 00.91-.91V5.156a.91.91 0 00-.91-.91z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.09 0H5.156a.91.91 0 00-.91.91v1.683s0 .547.592.547c.616 0 .607-.547.607-.547V1.2H12.8v7.354h-1.385s-.465.003-.465.57c0 .63.465.63.465.63h1.674A.91.91 0 0014 8.843V.91a.91.91 0 00-.91-.91z" }, void 0)] }), void 0));
}
exports.default = LineCopy;
