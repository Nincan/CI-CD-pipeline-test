"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderStackedTwinSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 42 24", "data-icon-name": "PlaceholderStackedTwinSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M28.008 1H33v6h-4.992zM33 9h6v6h-6zm-2.964 8H42v6H30.036zM8 1h5.024v6H8zm2 8H4v6h6zM0 17h6.984v6H0z", fill: "#CBD756" }), (0, jsx_runtime_1.jsx)("path", { d: "M22 1h5v6h-5zm0 8h10v6H22zm0 8h7v6h-7zM14 1h6v6h-6zm-3 8h9v6h-9zm-3 8h12v6H8z", fill: "#4CD2E0" })] })));
}
exports.default = PlaceholderStackedTwinSelectedClr;
