"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineYoutubeCreate(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineYoutubeCreate" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 1 0 7 7 7.009 7.009 0 0 0-7-7Zm0 13.242A6.242 6.242 0 1 1 13.242 7 6.249 6.249 0 0 1 7 13.242Z", fillRule: "evenodd" }, void 0), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M7.34 2.917H6.319V6.66H2.917v1.02h3.402v3.403H7.34V7.68h3.743V6.66H7.34V2.917z" }, void 0)] }), void 0));
}
exports.default = LineYoutubeCreate;
