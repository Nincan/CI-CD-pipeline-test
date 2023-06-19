"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/TickCircle.svg instead.
 */
function LineTickCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineTickCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.107 4.622l-3.27 3.27-.944-.944a.7.7 0 00-.99.99l1.44 1.44a.7.7 0 00.99 0l3.764-3.766a.7.7 0 00-.99-.99z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 .004A6.996 6.996 0 1013.996 7 7.004 7.004 0 007 .004zm0 12.592A5.596 5.596 0 1112.596 7 5.601 5.601 0 017 12.596z" })] })));
}
exports.default = LineTickCircle;
