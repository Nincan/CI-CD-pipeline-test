"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidBusinessLocation(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidBusinessLocation" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.6 9.873q-.265.417-.577.87c1.753.257 2.65.807 2.65 1.08 0 .365-1.59 1.22-4.674 1.22s-4.672-.855-4.672-1.22c0-.273.897-.823 2.65-1.08q-.314-.453-.577-.87c-1.731.32-3.051.977-3.051 1.951 0 1.43 2.843 2.176 5.65 2.176 2.81 0 5.652-.747 5.652-2.176 0-.974-1.32-1.63-3.05-1.95z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 11.702a1.096 1.096 0 00.878-.436c1.31-1.753 3.63-5.101 3.63-6.85A4.463 4.463 0 007 0a4.462 4.462 0 00-4.508 4.416c0 1.749 2.319 5.097 3.63 6.85a1.099 1.099 0 00.878.436zM5.39 6.083a.371.371 0 01.037-.346.378.378 0 01.313-.168h.089a.387.387 0 01.354.26c.104.265.38.4.817.4.716 0 .771-.372.771-.486 0-.232-.105-.495-.883-.681-.66-.158-1.536-.473-1.536-1.373a1.273 1.273 0 011.1-1.194v-.147a.548.548 0 111.096 0v.157a1.316 1.316 0 01.925.833.362.362 0 01-.042.337.38.38 0 01-.313.163h-.094a.368.368 0 01-.347-.275c-.079-.258-.3-.384-.677-.384-.468 0-.771.199-.771.504 0 .23.148.41.886.6.758.198 1.533.525 1.533 1.457a1.21 1.21 0 01-1.1 1.179v.14a.548.548 0 11-1.096 0V6.91a1.45 1.45 0 01-1.062-.827z" })] })));
}
exports.default = SolidBusinessLocation;
