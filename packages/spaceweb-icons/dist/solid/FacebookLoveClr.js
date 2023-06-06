"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidFacebookLoveClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidFacebookLoveClr" }, props, { children: (0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ fillRule: "evenodd", clipRule: "evenodd" }, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#F42C4C", d: "M7 14c3.855 0 7-3.145 7-7s-3.145-7-7-7-7 3.145-7 7 3.145 7 7 7z" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M7 4.975c.351-.723.82-1.248 1.95-1.248 1.131 0 2.1.97 2.1 2.168 0 1.867-2.457 4.193-4.05 4.794-1.594-.601-4.05-2.927-4.05-4.794 0-1.197.968-2.168 2.1-2.168 1.13 0 1.599.525 1.95 1.248z" }, void 0)] }), void 0) }), void 0));
}
exports.default = SolidFacebookLoveClr;
