"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Comment.svg instead.
 */
function LineComment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineComment" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.822 1.212L13.48.818l-.163-.11a1.964 1.964 0 00-.71-.152H1.394a1.97 1.97 0 00-.711.152l-.396.343-.11.162a1.969 1.969 0 00-.152.711v7.17c0 .219.063.511.153.712l.342.394.165.113c.196.086.495.149.709.149h3.802c.03 0 .123.027.147.042l4.579 2.82a.78.78 0 00.408.12c.12 0 .234-.029.339-.088a.73.73 0 00.363-.65v-2.244h1.575c.213 0 .511-.063.708-.15l.398-.346.108-.16c.09-.195.154-.494.154-.711v-7.17a1.96 1.96 0 00-.153-.713zm-1.029.712v7.17c0 .03-.01.09-.024.15l-.013.012a.78.78 0 01-.15.024h-1.92a.837.837 0 00-.835.836v1.777L5.963 9.497a1.621 1.621 0 00-.765-.217H1.394a.815.815 0 01-.15-.024l-.013-.014a.758.758 0 01-.024-.147v-7.17c0-.028.009-.09.024-.15l.013-.013a.795.795 0 01.15-.024h11.213c.027 0 .086.01.148.024l.014.014a.792.792 0 01.024.148z" }) })));
}
exports.default = LineComment;
