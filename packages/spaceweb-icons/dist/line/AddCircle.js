"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/AddCircle.svg instead.
 */
function LineAddCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineAddCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 .1C3.195.1.1 3.195.1 7s3.095 6.9 6.9 6.9 6.9-3.095 6.9-6.9S10.805.1 7 .1zm0 12.6A5.707 5.707 0 011.3 7c0-3.143 2.558-5.7 5.7-5.7s5.7 2.557 5.7 5.7c0 3.143-2.557 5.7-5.7 5.7z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M9.907 6.4H7.6V4.092a.6.6 0 10-1.2 0V6.4H4.092a.6.6 0 000 1.2H6.4v2.307a.6.6 0 001.2 0V7.6h2.307a.6.6 0 000-1.2z" }, void 0)] }), void 0));
}
exports.default = LineAddCircle;
