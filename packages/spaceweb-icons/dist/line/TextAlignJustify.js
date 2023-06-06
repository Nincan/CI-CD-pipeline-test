"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineTextAlignJustify(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineTextAlignJustify" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.707 2.303h12.586a.707.707 0 000-1.415H.707a.707.707 0 000 1.415zM13.293 4.468H.707a.707.707 0 000 1.414h12.586a.707.707 0 100-1.414zM13.293 8.082H.707a.707.707 0 100 1.415h12.586a.707.707 0 100-1.415zM13.293 11.697H.707a.707.707 0 000 1.415h12.586a.707.707 0 100-1.415z" }, void 0) }), void 0));
}
exports.default = LineTextAlignJustify;
