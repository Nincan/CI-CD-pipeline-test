"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidReply(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidReply" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.28 6.21l4.76-4.74a.89.89 0 01.1-.09.57.57 0 01.47-.11.6.6 0 01.5.62v2.05a9.46 9.46 0 012.31.4 7.42 7.42 0 014.48 3.45 7.31 7.31 0 011.03 4.37.6.6 0 01-.5.57.55.55 0 01-.1.02.6.6 0 01-.54-.37 4.8 4.8 0 00-.28-.47 5.46 5.46 0 00-2.51-2 7.92 7.92 0 00-3.1-.58c-.22 0-.42 0-.63.02H6.1v2.21a.6.6 0 01-.54.63.55.55 0 01-.07 0 .66.66 0 01-.46-.23l-3.17-3.2-1.58-1.6a.6.6 0 010-.95z" }, void 0) }), void 0));
}
exports.default = SolidReply;
