"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Share.svg instead.
 */
function LineShare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineShare" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.133 12.894a1.048 1.048 0 0 1-.194-.02 1.174 1.174 0 0 1-.672-.405 1.157 1.157 0 0 1-.259-.738A7.955 7.955 0 0 1 2.29 5.816a9.07 9.07 0 0 1 5.007-2.2v-1.35a1.119 1.119 0 0 1 .19-.644 1.146 1.146 0 0 1 .525-.43 1.18 1.18 0 0 1 1.257.243l4.386 4.441a1.15 1.15 0 0 1 .345.809 1.156 1.156 0 0 1-.083.447 1.139 1.139 0 0 1-.248.378l-4.387 4.488a1.157 1.157 0 0 1-1.797-.168 1.133 1.133 0 0 1-.188-.658V9.72h-.123c-3.8 0-4.891 2.37-4.939 2.476a1.137 1.137 0 0 1-.437.515 1.179 1.179 0 0 1-.645.182ZM8.516 2.41v2.36l-.586.023a7.798 7.798 0 0 0-4.805 1.912 6.758 6.758 0 0 0-1.904 4.8c.42-.768 2.16-3.294 6.728-2.976l.567.04v2.47l4.24-4.337Zm0 8.778v.002l.002-.002Zm4.276-4.535v.012l.006-.006Zm-4.38-4.349v.008l.007-.002Z" }, void 0) }), void 0));
}
exports.default = LineShare;
