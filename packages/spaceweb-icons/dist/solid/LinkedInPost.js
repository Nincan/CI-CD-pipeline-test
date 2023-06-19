"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLinkedInPost(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLinkedInPost" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.334 0H2.667A2.667 2.667 0 0 0 .001 2.667v8.666A2.667 2.667 0 0 0 2.667 14h8.667a2.666 2.666 0 0 0 2.665-2.667V2.667A2.666 2.666 0 0 0 11.334 0Zm-.377 7.913H7.914v3.043H6.088V7.913H3.044V6.087h3.044V3.043h1.826v3.044h3.043Z", fillRule: "evenodd" }) })));
}
exports.default = SolidLinkedInPost;
