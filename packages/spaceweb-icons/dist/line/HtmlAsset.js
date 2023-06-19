"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/HtmlAsset.svg instead.
 */
function LineHtmlAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineHtmlAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.54 5.25a.5.5 0 01.7 0l1.39 1.4.06.07a.5.5 0 01-.06.63l-1.4 1.4-.06.06a.5.5 0 01-.63-.06l-.06-.07a.5.5 0 01.06-.63L9.57 7 8.54 5.95l-.06-.07a.5.5 0 01.06-.63zm-3.27 0a.5.5 0 01.05.63l-.05.07L4.23 7l1.04 1.05a.5.5 0 01.05.63l-.05.07a.5.5 0 01-.64.06l-.07-.06-1.39-1.4a.5.5 0 01-.05-.63l.05-.07 1.4-1.4a.5.5 0 01.7 0zM7.94 3l.09.02a.5.5 0 01.36.53l-.02.09-1.98 7a.5.5 0 01-.98-.19l.02-.09 1.99-7A.5.5 0 017.94 3zm1.14-1.8h-7.6a.26.26 0 00-.29.3v11a.26.26 0 00.3.3H12.4a.26.26 0 00.3-.3V4.45c0-.05-.02-.07-.1-.15l-3.38-3c-.1-.1-.1-.1-.2-.1zM9.04 0a1.27 1.27 0 01.99.4l3.37 3a2.39 2.39 0 01.6 1.1v8a1.53 1.53 0 01-1.49 1.5H1.5A1.47 1.47 0 010 12.5v-11A1.47 1.47 0 011.49 0z" }) })));
}
exports.default = LineHtmlAsset;
