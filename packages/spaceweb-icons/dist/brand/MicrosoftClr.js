"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandMicrosoftClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandMicrosoftClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#df5b35", d: "M0 0h6.65v6.65H0z" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#46a2e8", d: "M0 7.35h6.65V14H0z" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#8bb638", d: "M7.35 0H14v6.65H7.35z" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#f4ba41", d: "M7.35 7.35H14V14H7.35z" }, void 0)] }), void 0));
}
exports.default = BrandMicrosoftClr;
