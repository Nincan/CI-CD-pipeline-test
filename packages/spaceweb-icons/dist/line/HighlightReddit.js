"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/HighlightReddit.svg instead.
 */
function LineHighlightReddit(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineHighlightReddit" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.291.183H2.71a.6.6 0 00-.6.6v7.831a.566.566 0 00.017.089.39.39 0 00.094.241.567.567 0 00.044.074l4.292 4.73a.6.6 0 00.888 0l4.292-4.73a.567.567 0 00.044-.074.39.39 0 00.094-.241.566.566 0 00.018-.089V.783a.6.6 0 00-.6-.6zm-.6 8.2L7 12.453l-3.691-4.07v-7h7.382z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 7.54a.6.6 0 00.6-.6V2.903a.6.6 0 00-1.2 0V6.94a.6.6 0 00.6.6z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "9.2", r: ".757" })] })));
}
exports.default = LineHighlightReddit;
