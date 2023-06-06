"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Gif.svg instead.
 */
function LineGif(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineGif" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.537 0H2.463A2.463 2.463 0 000 2.463v9.074A2.463 2.463 0 002.463 14h9.074A2.463 2.463 0 0014 11.537V2.463A2.463 2.463 0 0011.537 0zM12.8 11.537c0 .697-.566 1.263-1.263 1.263H2.463A1.264 1.264 0 011.2 11.537V2.463c0-.697.566-1.263 1.263-1.263h9.074c.697 0 1.263.566 1.263 1.263v9.074z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M4.29 7.39h.92v.458c-.207.147-.51.183-.702.183-.733 0-.978-.565-.978-1.023 0-.698.385-1.044.978-1.044.245 0 .568.066.833.31l.598-.58c-.478-.473-.926-.575-1.43-.575-1.37 0-1.994.957-1.994 1.889 0 .931.547 1.873 1.988 1.873.703 0 1.338-.244 1.567-.697V6.6H4.29v.79zm4.4 1.394h1.02V7.557h1.665v-.824H9.71v-.667h1.775V5.22H8.69zM6.789 5.221h1.025v3.564H6.789z" }, void 0)] }), void 0));
}
exports.default = LineGif;
