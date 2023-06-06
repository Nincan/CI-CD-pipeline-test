"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandTumblrCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandTumblrCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#34455C", cx: "7", cy: "7", r: "7" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M8.062 9.489c-.214 0-.405-.051-.572-.154a.58.58 0 0 1-.258-.304c-.046-.128-.07-.415-.07-.864l.017-1.97h1.793V5.093H7.179V3.25H6.104c-.048.4-.148.49-.275.748-.128.259-.298.48-.507.665-.211.183-.356.33-.652.43v1.105l.723-.016v2.714c0 .355.036.624.108.81.072.186.202.363.39.528.186.165.411.292.675.382.265.089.57.134.914.134a3.6 3.6 0 0 0 .846-.094c.26-.063.683-.248 1.004-.405V9.146c-.376.254-.887.343-1.268.343z" }, void 0)] }), void 0));
}
exports.default = BrandTumblrCircleClr;
