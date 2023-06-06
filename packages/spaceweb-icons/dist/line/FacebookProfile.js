"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineFacebookProfile(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineFacebookProfile" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 2.536a2.984 2.984 0 1 0 3 2.984 3.001 3.001 0 0 0-3-2.984ZM7 7.51a1.99 1.99 0 1 1 2-1.99 2 2 0 0 1-2 1.99Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7 .049a6.957 6.957 0 0 0-5 11.838 6.5 6.5 0 0 0 1 .82 6.871 6.871 0 0 0 4 1.244 7.057 7.057 0 0 0 4-1.243 10.244 10.244 0 0 0 1-.821A6.956 6.956 0 0 0 7 .049ZM7 12.98a5.972 5.972 0 0 1-3.9-1.442 2.174 2.174 0 0 1 2.074-1.542H8.85a2.173 2.173 0 0 1 2.075 1.542A6.087 6.087 0 0 1 7 12.98Zm4.675-2.238A3.156 3.156 0 0 0 8.85 9.002H5.175a3.145 3.145 0 0 0-2.825 1.74A5.79 5.79 0 0 1 1 7.013a6 6 0 0 1 12 0 5.906 5.906 0 0 1-1.325 3.73Z" }, void 0)] }), void 0));
}
exports.default = LineFacebookProfile;
