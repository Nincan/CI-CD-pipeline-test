"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidBottomAlign(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidBottomAlign" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.17 7.78h-1.4v-7a.78.78 0 00-1.55 0v7H4.83a.39.39 0 00-.27.66l2.17 2.17a.39.39 0 00.55 0l2.17-2.17a.39.39 0 00-.28-.66zM12.1 14H1.9a.7.7 0 110-1.4h10.18a.7.7 0 010 1.4z" }) })));
}
exports.default = SolidBottomAlign;
