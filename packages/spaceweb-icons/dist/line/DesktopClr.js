"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Desktop.svg instead.
 */
function LineDesktopClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineDesktopClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.08 0H.92A.92.92 0 000 .92v9.16c0 .508.412.92.92.92H6.4v1.8H4.625a.6.6 0 000 1.2h4.751a.6.6 0 000-1.2H7.6V11h5.48a.92.92 0 00.92-.92V.92a.92.92 0 00-.92-.92zm-.28 9.8H1.2V1.2h11.6v8.6z" }, void 0) }), void 0));
}
exports.default = LineDesktopClr;
