"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCommerce(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCommerce" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.918 4.127l-.734-2.355A1.373 1.373 0 0011.85.71H2.141A1.372 1.372 0 00.813 1.772L.08 4.127a2.302 2.302 0 00.629 2.216v5.55a1.402 1.402 0 001.397 1.397h9.785a1.402 1.402 0 001.398-1.398V6.343a2.281 2.281 0 00.63-2.216zm-6.22-2.02h1.37l.377 2.46a.88.88 0 11-1.747.12zM3.113 4.806a.879.879 0 01-.846.797.916.916 0 01-.832-1.146l.706-2.348h1.377zM6.3 4.687a.884.884 0 11-1.754-.12l.384-2.46H6.3zm5.43.915a.874.874 0 01-.845-.797l-.406-2.697 1.35-.007.733 2.355a.913.913 0 01-.832 1.146z" }, void 0) }), void 0));
}
exports.default = SolidCommerce;
