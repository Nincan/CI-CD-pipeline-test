"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidStarBadge(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidStarBadge" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 .067A6.933 6.933 0 1013.933 7 6.936 6.936 0 007 .067zm0 12.6A5.666 5.666 0 1112.666 7 5.669 5.669 0 017 12.666z", fillRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 1.973A5.027 5.027 0 1012.027 7 5.03 5.03 0 007 1.973zM9.041 10.1L7 9.042 4.986 10.1l.382-2.241-1.626-1.589 2.251-.326L7 3.9l1.007 2.042 2.251.326L8.66 7.858z", fillRule: "evenodd" })] })));
}
exports.default = SolidStarBadge;
