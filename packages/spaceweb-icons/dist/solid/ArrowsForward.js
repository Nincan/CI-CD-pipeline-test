"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidArrowsForward(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidArrowsForward" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.207 10.39v.936c0 .012.006.021.007.033-.002.018-.011.034-.011.053a.694.694 0 00.196.487.707.707 0 001 .01l.009-.01 1.718-1.712a.702.702 0 00-.001-.992L7.408 7.478a.702.702 0 00-1.198.496v.002l-.002.012v1l-5.51-.001a.701.701 0 000 1.402zM12.064 2.091a.703.703 0 00-1.195.504v.002l-.002.012.006.999-5.509.035a.701.701 0 10.004 1.402h.005l5.509-.035.006.936c0 .012.006.022.007.033-.001.019-.01.035-.01.054a.693.693 0 00.199.485.707.707 0 001 .004l.008-.01L13.8 4.789a.702.702 0 00-.007-.991z" }, void 0) }), void 0));
}
exports.default = SolidArrowsForward;
