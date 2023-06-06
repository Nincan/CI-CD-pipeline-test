"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidProductVariants(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidProductVariants" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.51 0H5a1.53 1.53 0 00-1.42.9h7.79a1.73 1.73 0 011.73 1.73v7.79A1.53 1.53 0 0014 9V1.49A1.49 1.49 0 0012.51 0z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.78 1.72H3.25a1.53 1.53 0 00-1.39.9h7.79a1.73 1.73 0 011.73 1.73v7.79a1.53 1.53 0 00.9-1.39V3.21a1.49 1.49 0 00-1.5-1.49z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M1.53 3.44h7.53a1.49 1.49 0 011.49 1.49v7.53A1.53 1.53 0 019 14H1.53A1.53 1.53 0 010 12.47V5a1.53 1.53 0 011.53-1.56z" }, void 0)] }), void 0));
}
exports.default = SolidProductVariants;
