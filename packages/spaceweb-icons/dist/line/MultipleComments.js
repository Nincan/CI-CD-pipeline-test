"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/MultipleComments.svg instead.
 */
function LineMultipleComments(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineMultipleComments" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.701 13.987l-.297-.062c-.486-.212-.524-.832-.524-1.017l.119-.896c.012-.085.006-.149-.017-.173-.02-.023-.092-.071-.363-.071h-.664c-.686-.063-1.17-.285-1.494-.654-.486-.546-.467-1.24-.458-1.374L.001 4.407c.106-1.486 1.03-2.012 1.625-2.012l8.555.013c.51.005 1.087.045 1.457.47.41.47.368 1.03.354 1.137l.005 5.763c0 1.492-.944 2.023-1.83 2.023l-3.621-.01c-.27 0-.557.239-.67.365l-1.392 1.427c-.17.174-.435.404-.783.404m-1.082-3.21c.23 0 .766 0 1.118.405.153.176.32.486.252.968l-.08.59 1.236-1.268c.092-.102.653-.682 1.28-.682v-.014l3.696-.008h.047c.557 0 .828-.302.828-.99l-.001-5.822c.005-.069.024-.266-.111-.42-.095-.109-.45-.124-.711-.127l-8.548-.013c-.179 0-.568.256-.624 1.047l.002 5.33c-.002.048-.024.418.207.678.157.178.425.287.8.328l.61-.003z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.638.495c-.37-.424-.947-.464-1.457-.47L3.626.014c-.595 0-1.519.525-1.625 2.011v.371h1V2.06c.056-.79.445-1.046.624-1.046l8.548.013c.261.003.616.018.71.127.136.154.117.351.112.42v5.821c0 .689-.27.99-.827.99H12V9.42h.168c.885 0 1.829-.532 1.829-2.024l-.005-5.763a1.514 1.514 0 00-.354-1.137z" })] })));
}
exports.default = LineMultipleComments;
