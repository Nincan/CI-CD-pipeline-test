"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Heart.svg instead.
 */
function LineHeart(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineHeart" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.017 2.398s2.298-2.315 4.776-.925c0 0 2.11.946 2.22 3.75 0 0 .342 2.21-3.044 5.211 0 0-2.127 1.826-3.986 2.537h.034c-1.859-.71-3.986-2.537-3.986-2.537C-.355 7.432-.013 5.223-.013 5.223c.11-2.804 2.22-3.75 2.22-3.75 2.478-1.39 4.776.925 4.776.925h.034zm-2.515-.077c-1.684-.416-2.667.988-2.667.988-1.265 1.633-.32 3.431-.32 3.431.604 1.325 2.165 2.72 2.165 2.72 1.365 1.282 3.321 2.297 3.321 2.297 2.466-1.29 3.932-2.885 3.932-2.885 1.691-1.725 1.849-3.05 1.849-3.05.257-1.67-.77-2.7-.77-2.7-.792-.907-1.84-.868-1.84-.868-1.176-.059-2.153.831-2.153.831l-1.017.907c-1.602-1.654-2.5-1.67-2.5-1.67z" }) })));
}
exports.default = LineHeart;
