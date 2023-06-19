"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Clone.svg instead.
 */
function LineClone(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 12 12", "data-icon-name": "LineClone" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.758 3.294H3.396c-.97 0-1.75.75-1.774 1.707l-.005 2.224a.516.516 0 001.03 0l-.003-2.097.006-.073a.742.742 0 01.746-.73h3.362c.412 0 .735.325.75.753l.004 3.251-.008.076a.745.745 0 01-.746.73H4.379a.516.516 0 000 1.031h2.379c.955 0 1.75-.76 1.772-1.686l.009-.07-.006-3.431a1.778 1.778 0 00-1.775-1.685z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.995 1.93A1.779 1.779 0 0010.221.249H6.858c-.956 0-1.751.757-1.77 1.684l-.01.096c0 .28.227.498.516.498a.505.505 0 00.434-.25.518.518 0 00.083-.269.745.745 0 01.747-.728h3.362c.412 0 .735.324.75.752l.003 3.253-.008.074a.743.743 0 01-.745.729h-.432a.516.516 0 000 1.03h.432c.954 0 1.749-.758 1.772-1.686L12 5.36l-.005-3.43zM2.657 9.65H2.1v-.554a.517.517 0 00-1.03 0v.555H.515a.516.516 0 000 1.03h.556v.556a.516.516 0 001.03 0v-.555h.556a.517.517 0 000-1.031z" })] })));
}
exports.default = LineClone;
