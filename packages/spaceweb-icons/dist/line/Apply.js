"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineApply(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineApply" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.555 9.87V3.545a1.999 1.999 0 00-1.997-1.997h-5.53a2.048 2.048 0 100 1h5.53a.998.998 0 01.997.997V9.87H8.672l2.383 4.128 2.383-4.128zM2.048 3.097a1.048 1.048 0 111.049-1.049 1.05 1.05 0 01-1.049 1.049z" }) })));
}
exports.default = LineApply;
