"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Import.svg instead.
 */
function LineImport(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineImport" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.3 13.9H.7c-.3 0-.6-.3-.6-.6V9.7c0-.3.3-.6.6-.6s.6.3.6.6v3h11.5v-3c0-.3.3-.6.6-.6s.6.3.6.6v3.6c-.1.3-.3.6-.7.6z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.3 6.6a.6.6 0 00-.8 0L7.6 8.4V.7c0-.3-.3-.6-.6-.6s-.6.3-.6.6v7.7L4.5 6.6c-.2-.2-.6-.2-.8 0s-.2.6 0 .8l2.9 2.7.1.1h.5c.1 0 .1-.1.2-.1l2.8-2.7c.3-.1.3-.5.1-.8z" })] })));
}
exports.default = LineImport;
