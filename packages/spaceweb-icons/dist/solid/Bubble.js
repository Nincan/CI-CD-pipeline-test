"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidBubble(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidBubble" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4 6.3C6 6.3 7.8 8 7.8 10c0 2.2-1.8 3.9-4 3.9S0 12.3 0 10.1s1.8-3.8 4-3.8zm6.6 3.7c1 0 1.9.9 1.9 2s-.9 1.8-2 1.8-1.9-.8-1.9-1.9c0-1 .9-1.9 2-1.9zM13 8c.5 0 1 .4 1 1s-.5 1-1 1c-.6 0-1-.5-1-1s.4-1 1-1zm-3-7c1.9 0 3.4 1.5 3.4 3.3 0 1.9-1.5 3.3-3.4 3.3a3.3 3.3 0 01-3.3-3.3C6.7 2.4 8.2 1 10 1zM3 0c1.6 0 2.8 1.2 2.8 2.7a2.7 2.7 0 01-5.5 0C.3 1.2 1.6 0 3.1 0z" }, void 0) }), void 0));
}
exports.default = SolidBubble;
