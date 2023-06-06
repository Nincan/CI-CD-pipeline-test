"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidActivityCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidActivityCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.36 7.9H6.99a.79.79 0 00-.74.52h-.86a.77.77 0 00-.4-.44V6.02a.77.77 0 00.4-.44h.85a.79.79 0 00.74.53h2.37a.77.77 0 100-1.54H6.98a.79.79 0 00-.74.52h-.85a.77.77 0 00-.4-.43v-.99a.18.18 0 00-.17-.17h-.36a.18.18 0 00-.18.17v.99a.76.76 0 000 1.36v1.96a.76.76 0 000 1.36v.98a.18.18 0 00.18.18h.36a.18.18 0 00.18-.17v-.99a.77.77 0 00.38-.43h.87a.79.79 0 00.74.52h2.37a.77.77 0 100-1.54zM7 0a7 7 0 11-7 7 7 7 0 017-7z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidActivityCircle;
