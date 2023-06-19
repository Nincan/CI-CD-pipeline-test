"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandPaidSearchCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandPaidSearchCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40A3F5", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fill: "#FFF" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.128 8.536v.229a.33.33 0 11-.662 0v-.229a1.164 1.164 0 01-.511-.315.33.33 0 11.483-.453.495.495 0 10.361-.831 1.156 1.156 0 01-.33-2.263v-.229a.33.33 0 11.661 0v.229c.194.059.37.165.511.315a.332.332 0 01-.013.468.332.332 0 01-.468-.013.495.495 0 10-.361.831c.638 0 1.156.518 1.156 1.156-.003.522-.35.964-.827 1.105z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.682 11.06l-1.88-1.888a3.914 3.914 0 00.89-2.486 3.938 3.938 0 00-3.933-3.934 3.938 3.938 0 00-3.934 3.934 3.938 3.938 0 003.934 3.933c.872 0 1.676-.29 2.33-.772l1.897 1.906a.488.488 0 00.694.001.491.491 0 00.002-.695zM3.676 6.685c0-1.7 1.383-3.082 3.083-3.082A3.085 3.085 0 019.84 6.686a3.085 3.085 0 01-3.08 3.081 3.086 3.086 0 01-3.083-3.081z" })] }))] })));
}
exports.default = BrandPaidSearchCircleClr;
