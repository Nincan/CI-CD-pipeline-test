"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/TextDocument.svg instead.
 */
function LineTextDocument(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineTextDocument" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.5 14h-11C.6 14 0 13.3 0 12.5v-11C0 .7.6 0 1.5 0h7.6c.4 0 .7.1 1 .4l3.4 3c.3.3.5.7.5 1.1v8c0 .8-.6 1.5-1.5 1.5zM1.5 1.2c-.2 0-.3.1-.3.3v11c0 .2.1.3.3.3h11.1c.2 0 .3-.1.3-.3v-8c0-.1 0-.2-.1-.2l-3.4-3s-.1-.1-.2-.1H1.5z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 4.8H3.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6H7c.3 0 .6.3.6.6s-.3.6-.6.6zm3.1 2.9H3.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h6.2c.3 0 .6.3.6.6s-.3.6-.6.6zm0 2.8H3.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h6.2c.3 0 .6.3.6.6s-.3.6-.6.6z" })] })));
}
exports.default = LineTextDocument;
