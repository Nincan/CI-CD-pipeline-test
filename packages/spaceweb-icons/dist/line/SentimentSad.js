"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/SentimentSad.svg instead.
 */
function LineSentimentSad(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineSentimentSad" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 10.02 14.02A7 7 0 007 0zm0 12.85a5.85 5.85 0 11.01-11.71A5.85 5.85 0 017 12.84z" }, void 0), (0, jsx_runtime_1.jsx)("circle", { fillRule: "evenodd", clipRule: "evenodd", cx: "4.69", cy: "5.85", r: "1.15" }, void 0), (0, jsx_runtime_1.jsx)("circle", { fillRule: "evenodd", clipRule: "evenodd", cx: "9.31", cy: "5.85", r: "1.15" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M9.73 10.64l-.06-.1a3.04 3.04 0 00-3.05-1.42 3.1 3.1 0 00-2.29 1.42l-.06.1-.79-.52.06-.1A3.88 3.88 0 016.51 8.2H7c1.41 0 2.74.7 3.46 1.84l.06.1-.79.51z" }, void 0)] }), void 0));
}
exports.default = LineSentimentSad;
