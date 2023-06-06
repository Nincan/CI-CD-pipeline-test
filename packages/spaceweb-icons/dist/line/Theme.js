"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Themes.svg instead.
 */
function LineTheme(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineTheme" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "3.76", cy: "10.87", r: "1.05" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.1 4.44l-2.94-2.38a.55.55 0 00-.4-.12.52.52 0 00-.35.2l-2.59 3.2V.7c0-.39-.34-.7-.76-.7h-4.6C1.05 0 .7.31.7.7v12.6c0 .39.35.7.77.7h4.59c.42 0 .76-.31.76-.7v-.22h5.4c.3 0 .54-.24.54-.53V8.77c0-.3-.24-.53-.54-.53h-1.5l2.46-3.06a.53.53 0 00-.08-.74zM5.82 13H1.7V1h4.12v12zm5.87-3.7v2.72H7.66l2.2-2.72h1.83zm-4.87 2.07V7.03L9.9 3.21 12 4.9l-5.18 6.46z" }, void 0)] }), void 0));
}
exports.default = LineTheme;
