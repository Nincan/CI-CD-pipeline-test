"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAttatchmentCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidAttatchmentCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zm2.24 8.76a2.2 2.2 0 01-.2.9 2.24 2.24 0 01-.54.76 2.22 2.22 0 01-.8.47A2.26 2.26 0 017 11l-.22-.01a2.3 2.3 0 01-2.02-2.32V4.65a1.65 1.65 0 01.54-1.22 1.64 1.64 0 01.6-.35A1.66 1.66 0 016.4 3h.16a1.7 1.7 0 011.5 1.72v3.65a1.06 1.06 0 01-.1.43 1.06 1.06 0 01-.64.58 1.08 1.08 0 01-.33.05 1.05 1.05 0 01-.11 0 1.1 1.1 0 01-.95-1.12V4.94a.38.38 0 01.37-.37.38.38 0 01.38.37v3.43a.3.3 0 00.62 0V4.65a.9.9 0 00-.9-.9.89.89 0 00-.09 0 .93.93 0 00-.8.95v4.06A1.48 1.48 0 007 10.24a1.43 1.43 0 00.14 0A1.53 1.53 0 008.48 8.7V4.94a.38.38 0 01.38-.37.38.38 0 01.38.37z" }, void 0) }), void 0));
}
exports.default = SolidAttatchmentCircle;
