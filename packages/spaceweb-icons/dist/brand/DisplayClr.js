"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandDisplayClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandDisplayClr" }, props, { children: (0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ fill: "#40A3F5" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.75-.033H.25A.254.254 0 000 .225v10.81c0 .143.112.258.25.258h5.249v1.74H3.75c-.138 0-.25.022-.25.05v.9c0 .027.112.05.25.05h6.5c.138 0 .25-.023.25-.05v-.9c0-.028-.112-.05-.25-.05H8.501v-1.74h5.249c.138 0 .25-.115.25-.258V.225a.254.254 0 00-.25-.258zm-1.478 9.494c0 .1-.085.182-.189.182H1.917a.185.185 0 01-.189-.182V1.799c0-.1.085-.182.189-.182h10.166c.104 0 .189.082.189.182v7.662z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M9.394 6.564l-.941.743-2.165-3.653-2.385 5.002h6.766z" }, void 0), (0, jsx_runtime_1.jsx)("ellipse", { cx: "9.129", cy: "4.476", rx: ".765", ry: ".747" }, void 0)] }), void 0) }), void 0));
}
exports.default = BrandDisplayClr;
