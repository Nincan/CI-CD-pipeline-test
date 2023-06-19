"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderLinkSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 27 31", "data-icon-name": "PlaceholderLinkSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#CBD756", d: "M1.09 1.26h24.24V14.8H1.1z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M26.33 30.73h-1V2.4c0-.58-.4-1.06-.9-1.06H1.99c-.5 0-.9.48-.9 1.06v28.34h-1V2.4C.09 1.25.94.33 1.99.33h22.44c1.05 0 1.9.93 1.9 2.06v28.34z" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.62 19.24h6.5v1h-6.5zm0 3.17h18.17v1H3.62zm0 3.17h13.82v1H3.62zm0 3.18H7.6v1H3.62z", fill: "#4CD2E0" })] })));
}
exports.default = PlaceholderLinkSelectedClr;
