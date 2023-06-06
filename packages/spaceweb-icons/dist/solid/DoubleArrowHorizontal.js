"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidDoubleArrowHorizontal(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidDoubleArrowHorizontal" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M0 7.005a.82.82 0 0 1 .237-.58L2.666 3.95a.808.808 0 0 1 .583-.249.771.771 0 0 1 .557.247.827.827 0 0 1 .225.568v.048l.014.14-.014 1.482h5.924v-1.64a.833.833 0 0 1 .237-.596.783.783 0 0 1 1.127 0l2.445 2.461a.829.829 0 0 1-.001 1.16l-2.429 2.46a.803.803 0 0 1-.583.25.77.77 0 0 1-.557-.248.827.827 0 0 1-.225-.567v-.047l-.013-.139.013-1.484H4.045V9.45a.849.849 0 0 1-.251.61.784.784 0 0 1-1.128 0L.236 7.586A.823.823 0 0 1 0 7.005Z" }, void 0) }), void 0));
}
exports.default = SolidDoubleArrowHorizontal;
