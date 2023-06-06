"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderStackedTwinClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 42 24", "data-icon-name": "PlaceholderStackedTwinClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M28 1h5v6h-5zm5 8h6v6h-6zm-3 8h12v6H30zM8 1h5v6H8zM4 9h6v6H4zm-4 8h7v6H0z", opacity: ".5" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M22 1h5v6h-5zm0 8h10v6H22zm0 8h7v6h-7zM14 1h6v6h-6zm-3 8h9v6h-9zm-3 8h12v6H8z", fillRule: "evenodd", clipRule: "evenodd" }, void 0)] }), void 0));
}
exports.default = PlaceholderStackedTwinClr;
