"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAlert(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAlert" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.063.012a6.994 6.994 0 106.994 6.994A6.996 6.996 0 007.063.012zm0 7.693a.701.701 0 01-.7-.699V4.21a.701.701 0 01.7-.7.701.701 0 01.7.7v2.797a.701.701 0 01-.7.7zm0 2.798a.701.701 0 01-.7-.7.701.701 0 01.7-.699.701.701 0 01.7.7.701.701 0 01-.7.699z" }) })));
}
exports.default = SolidAlert;
