"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineTextAlignRight(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineTextAlignRight" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M14 1.596a.707.707 0 00-.707-.707H.707a.707.707 0 000 1.415h12.586A.707.707 0 0014 1.596zM13.293 4.468H7a.707.707 0 000 1.415h6.293a.707.707 0 100-1.415zM13.293 8.083H3.67a.707.707 0 100 1.414h9.623a.707.707 0 100-1.414zM13.293 11.696H7a.707.707 0 000 1.415h6.293a.707.707 0 000-1.415z" }, void 0) }), void 0));
}
exports.default = LineTextAlignRight;
