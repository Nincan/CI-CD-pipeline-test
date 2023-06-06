"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidFanCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidFanCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 5.74A2.83 2.83 0 008.25 7a2.87 2.87 0 00-.74.53 2.83 2.83 0 00-.52.73A2.82 2.82 0 005.72 7 2.82 2.82 0 007 5.74zm.2-2.56a2.43 2.43 0 00-.38.84l-.07.35-.22.02a4.45 4.45 0 00-1.81.48 4.27 4.27 0 00-1.63 1.45c-.14.2-.12.32.08.46a2.43 2.43 0 001 .42l.2.04.01.09a4.51 4.51 0 00.11.88 4.3 4.3 0 001.83 2.7.29.29 0 00.47-.07 2.56 2.56 0 00.43-1.08l.03-.15h.1a4.71 4.71 0 001.62-.35A4.12 4.12 0 0011 7.5v-.11a.55.55 0 00-.22-.23 2.44 2.44 0 00-.84-.36l-.32-.06-.01-.14-.03-.36a4.38 4.38 0 00-.73-1.99A4.31 4.31 0 007.67 3.1c-.21-.14-.32-.12-.47.1zM7 0a7 7 0 11-7 7 7 7 0 017-7z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidFanCircle;
