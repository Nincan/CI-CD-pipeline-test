"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandTwitchClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandTwitchClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.5 0L1 2.5v9h3V14l2.5-2.5h2L13 7V0zM12 6.5l-2 2H8l-1.75 1.75V8.5H4V1h8z", fill: "#9146ff" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#9146ff", d: "M9.5 2.75h1v3h-1zM6.75 2.75h1v3h-1z" }, void 0)] }), void 0));
}
exports.default = BrandTwitchClr;
