"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Image.svg instead.
 */
function LineImage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineImage" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "9.91", cy: "4.68", r: "1.25" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M12.03 1H1.97C.88 1 0 1.88 0 2.97v8.06C0 12.12.88 13 1.97 13h10.06c1.09 0 1.97-.88 1.97-1.97V2.97C14 1.88 13.12 1 12.03 1zM1.97 2.2h10.06c.43 0 .77.34.77.77v8.11l-1.9-2.76a1.45 1.45 0 00-1.19-.65c-.47 0-.9.24-1.18.65l-.5.66-1.21-2.03a1.83 1.83 0 00-3.15 0L1.2 11.01V2.97c0-.43.34-.77.77-.77zm6.36 9.6h-6.2L4.7 7.57c.24-.4.85-.4 1.09 0l2.54 4.23zm1.39 0l-1.01-1.7.8-1.09c.06-.09.16-.16.2-.14.07 0 .15.05.2.14l1.92 2.79H9.72z" }, void 0)] }), void 0));
}
exports.default = LineImage;
