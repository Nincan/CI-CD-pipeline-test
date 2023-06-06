"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTickCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTickCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.53 4.44l-3.64 3.6-1.42-1.4a.72.72 0 10-1 1.03l1.92 1.9a.72.72 0 001.01 0l4.14-4.11a.72.72 0 10-1.01-1.02zM7 0a7 7 0 11-7 7 7 7 0 017-7z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidTickCircle;
