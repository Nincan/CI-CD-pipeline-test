"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Note.svg instead.
 */
function LineNote(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineNote" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.5 13.87c-1.94 0-2.47-1.46-2.48-2.23l.05-8.6C1.08 1.22 2.6.65 3.4.61h2.46a.5.5 0 110 1H3.41c-.1 0-1.34.13-1.35 1.42l-.05 8.6c0 .2.1 1.23 1.49 1.23l4.76.03c-.02 0 1.29-.21 1.3-1.3l.01-2.61a.5.5 0 111 0l-.01 2.6c-.01 1.58-1.46 2.2-2.23 2.3l-4.84-.02z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M5.11 8.35a.5.5 0 01-.49-.6l.42-2.18a.5.5 0 01.14-.27L9.78.8c.03-.04.34-.34.78-.53.69-.3 1.33-.19 1.82.3.92.94.6 1.95.17 2.4L7.63 7.84a.5.5 0 01-.27.14l-2.16.37a.53.53 0 01-.1 0zM6 5.91l-.26 1.33 1.3-.22 4.8-4.75c.1-.12.33-.48-.17-.99-.46-.46-1.12.16-1.2.23L6 5.9z" }, void 0)] }), void 0));
}
exports.default = LineNote;
