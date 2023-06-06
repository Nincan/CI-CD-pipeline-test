"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidHeartCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidHeartCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.07 4.5h-.14c-1.38.2-1.8 1.6-1.1 2.82A9.18 9.18 0 007 10.5a.03.03 0 00.04 0 8.82 8.82 0 003.14-3.26 1.76 1.76 0 00-.38-2.43c-.9-.62-1.98.05-2.73.93a.12.12 0 01-.18 0c-.5-.48-1.28-1.32-1.97-1.22zM7 0a7 7 0 11-7 7 7 7 0 017-7z" }, void 0) }), void 0));
}
exports.default = SolidHeartCircle;
