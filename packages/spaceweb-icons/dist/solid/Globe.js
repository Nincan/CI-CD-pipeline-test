"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGlobe(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGlobe" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7.002 7.002 0 00-7-7zm-.7 12.55A5.592 5.592 0 011.4 7a5.682 5.682 0 01.147-1.253L4.9 9.1v.7a1.404 1.404 0 001.4 1.4zm4.83-1.777A1.389 1.389 0 009.8 9.8h-.7V7.7a.702.702 0 00-.7-.7H4.2V5.6h1.4a.702.702 0 00.7-.7V3.5h1.4a1.404 1.404 0 001.4-1.4v-.287a5.587 5.587 0 012.03 8.96z" }) })));
}
exports.default = SolidGlobe;
