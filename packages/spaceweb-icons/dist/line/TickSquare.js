"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/CheckBox.svg instead.
 */
function LineTickSquare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineTickSquare" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.149 4.64a.567.567 0 01.894.698L6.479 9.902c-.008.01-.02.013-.028.024-.01.01-.013.023-.022.033a.539.539 0 01-.065.043.613.613 0 01-.092.059.524.524 0 01-.104.033.585.585 0 01-.104.02.613.613 0 01-.108-.008.625.625 0 01-.105-.022.543.543 0 01-.099-.05.59.59 0 01-.068-.033.354.354 0 01-.026-.03c-.01-.01-.022-.012-.031-.022L3.846 8.123a.567.567 0 01.811-.792l1.328 1.361zm3.746-3.535H1.105v11.79h11.79zm0-1.105A1.105 1.105 0 0114 1.105v11.79A1.105 1.105 0 0112.895 14H1.105A1.105 1.105 0 010 12.895V1.105A1.105 1.105 0 011.105 0z" }) })));
}
exports.default = LineTickSquare;
