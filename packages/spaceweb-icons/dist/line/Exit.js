"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Exit.svg instead.
 */
function LineExit(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineExit" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.282 10.613a.588.588 0 00-.588.588 1.877 1.877 0 01-.396 1.155 1.1 1.1 0 01-.837.426H2.409A1.441 1.441 0 011.176 11.2V2.799A1.441 1.441 0 012.41 1.22H9.46a1.441 1.441 0 011.233 1.58.588.588 0 001.176 0A2.604 2.604 0 009.46.042H2.409A2.604 2.604 0 000 2.799v8.402a2.604 2.604 0 002.409 2.757H9.46a2.254 2.254 0 001.738-.846 3.043 3.043 0 00.67-1.911.588.588 0 00-.587-.588z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.994 6.916a.581.581 0 00-.125-.287l-.036-.04-1.595-1.663a.588.588 0 10-.849.815l.645.67H6.595a.588.588 0 000 1.177h5.439l-.645.67a.588.588 0 00.85.815l1.598-1.666v-.002l.002-.001v-.001l.002-.001.001-.001a.587.587 0 00.156-.357.575.575 0 00-.004-.128z" }, void 0)] }), void 0));
}
exports.default = LineExit;
