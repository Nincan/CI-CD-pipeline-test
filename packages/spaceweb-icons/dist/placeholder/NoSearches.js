"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderNoSearches(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 40 40", "data-icon-name": "PlaceholderNoSearches" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.793 11.696a1 1 0 00-1 1v3.96a1 1 0 002 0v-3.96a1 1 0 00-1-1z" }), (0, jsx_runtime_1.jsx)("path", { d: "M31.447 21.72l.002-.001.002-.003.002-.002.002-.002a9.297 9.297 0 00.745-.855h1.58a6.15 6.15 0 000-12.3h-1.268a10.206 10.206 0 00-1.114-1.338l-.001-.001a10.243 10.243 0 00-14.46 0 10.287 10.287 0 00-1.113 1.339H6.23a6.15 6.15 0 100 12.3h9.906a9.26 9.26 0 00.746.856l.001.002.002.002.002.002h.001a10.165 10.165 0 007.28 3.038 10.3 10.3 0 002.57-.335l.96 2.121a2.42 2.42 0 00-.407 2.63l3.38 7.466a2.426 2.426 0 002.221 1.425 2.514 2.514 0 001.038-.225 2.436 2.436 0 001.216-3.225l-3.38-7.467a2.412 2.412 0 00-2.244-1.426l-.9-1.989a10.217 10.217 0 002.825-2.012zM17.185 10.088a8.094 8.094 0 01.887-1.162h12.192a8 8 0 01.89 1.169 8.23 8.23 0 01-.275 9.197 6.917 6.917 0 01-.567.72H18.024a7.019 7.019 0 01-.58-.738 8.233 8.233 0 01-.26-9.186zm20.741 4.614a4.151 4.151 0 01-4.145 4.155h-.338a10.14 10.14 0 00.184-8.3h.154a4.15 4.15 0 014.145 4.145zm-35.852 0a4.153 4.153 0 014.156-4.145h8.48a10.15 10.15 0 00.181 8.3H6.23a4.16 4.16 0 01-4.156-4.155z" })] })));
}
exports.default = PlaceholderNoSearches;
