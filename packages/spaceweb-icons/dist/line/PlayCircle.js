"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LinePlayCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LinePlayCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.36 6.363l-3.5-2.049c-.604-.352-1.09-.073-1.09.621v4.13c0 .696.488.972 1.089.62l3.502-2.05v.002a.675.675 0 000-1.274z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zm0 12.6A5.6 5.6 0 1112.6 7 5.606 5.606 0 017 12.6z" })] })));
}
exports.default = LinePlayCircle;
