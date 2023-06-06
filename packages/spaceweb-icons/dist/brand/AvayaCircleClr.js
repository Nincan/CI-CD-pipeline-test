"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandAvayaCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandAvayaCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7.004", r: "6.991", fill: "#ec1c2e" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", fillRule: "evenodd", d: "M5.339 8.418h2.425l.393.971H4.884l-.523 1.115H2.916L6.5 3.158h1l3.584 7.346H9.64L7 4.832 5.339 8.418z" }, void 0)] }), void 0));
}
exports.default = BrandAvayaCircleClr;
