"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidInfoCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidInfoCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zm.7 10.768a.7.7 0 11-1.4 0V6.6a.7.7 0 111.4 0zM7 5.028a.898.898 0 11.898-.898.898.898 0 01-.898.898z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidInfoCircle;
