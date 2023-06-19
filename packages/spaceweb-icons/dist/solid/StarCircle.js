"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidStarCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidStarCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 3.5a.22.22 0 00-.2.13l-.96 2.04L3.7 6a.22.22 0 00-.18.16.24.24 0 00.06.23L5.12 8l-.36 2.24a.24.24 0 00.08.23.21.21 0 00.23.01L7 9.41l1.93 1.06a.21.21 0 00.23-.01.24.24 0 00.08-.23l-.36-2.25 1.55-1.59a.24.24 0 00.06-.23.22.22 0 00-.18-.16l-2.15-.33-.96-2.04A.22.22 0 007 3.5zM7 0a7 7 0 11-7 7 7 7 0 017-7z", fillRule: "evenodd" }) })));
}
exports.default = SolidStarCircle;
