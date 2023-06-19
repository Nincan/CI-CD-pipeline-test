"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidStatus(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidStatus" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0zM6.303 9.7l4.409-4.408a.7.7 0 0 0-.99-.99L5.793 8.228l-1.53-1.44a.7.7 0 0 0-.96 1.019L5.33 9.714a.697.697 0 0 0 .974-.015z" }) })));
}
exports.default = SolidStatus;
