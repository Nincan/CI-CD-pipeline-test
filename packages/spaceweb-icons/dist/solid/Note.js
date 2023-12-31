"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidNote(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidNote" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.342 8.719l-2.72.564a.834.834 0 01-.818-.976l.45-2.61a2.564 2.564 0 01.72-1.39L10.098.183a2.635 2.635 0 00-.78-.13h-6.51a2.663 2.663 0 00-2.66 2.662v8.57a2.663 2.663 0 002.663 2.663h6.508a2.663 2.663 0 002.663-2.663V5.67l-2.35 2.348a2.585 2.585 0 01-1.29.701z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.337.64a1.853 1.853 0 00-2.458 0L6.419 5.1a1.773 1.773 0 00-.486.934L5.63 7.792a.56.56 0 00.457.642.3.3 0 00.097.01l1.817-.38a1.716 1.716 0 00.865-.466l4.48-4.48a1.687 1.687 0 00.506-1.234A1.758 1.758 0 0013.337.64z" })] })));
}
exports.default = SolidNote;
