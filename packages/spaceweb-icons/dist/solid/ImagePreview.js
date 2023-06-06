"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidImagePreview(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidImagePreview" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fillRule: "evenodd", clipRule: "evenodd", cx: "12.5", cy: "3.35", r: "1.5" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M9.33 14H0l3.87-5.5c.36-.52 1.29-.51 1.64 0L9.33 14zm1.52-.01l-1.52-2.18 1.2-1.4c.09-.13.25-.22.3-.19.11 0 .22.06.3.17L14 14h-3.15v-.01z" }, void 0)] }), void 0));
}
exports.default = SolidImagePreview;
