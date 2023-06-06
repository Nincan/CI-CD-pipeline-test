"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidFastForward(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidFastForward" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.17 2.02a.83.83 0 00-.83.83v3.58l-.09-.1-4.78-3.38a.83.83 0 00-1.31.68V6.4l-.07-.07-4.78-3.38A.83.83 0 000 3.63v6.74a.83.83 0 001.31.68l4.78-3.37.07-.07v2.76a.83.83 0 001.3.68l4.79-3.37.1-.1v3.57a.83.83 0 001.65 0v-8.3a.83.83 0 00-.83-.83z" }, void 0) }), void 0));
}
exports.default = SolidFastForward;
