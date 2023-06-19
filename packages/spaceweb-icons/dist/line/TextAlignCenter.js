"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineTextAlignCenter(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineTextAlignCenter" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.293.889H.707a.707.707 0 000 1.415h12.586a.707.707 0 000-1.415zM10.147 5.883a.707.707 0 000-1.415H3.853a.707.707 0 100 1.415zM11.81 8.083H2.189a.707.707 0 100 1.414h9.623a.707.707 0 100-1.414zM10.147 11.696H3.853a.707.707 0 000 1.415h6.294a.707.707 0 000-1.415z" }) })));
}
exports.default = LineTextAlignCenter;
