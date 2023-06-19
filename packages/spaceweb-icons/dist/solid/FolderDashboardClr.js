"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFolderDashboardClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFolderDashboardClr" }, props, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("linearGradient", tslib_1.__assign({ id: "solid_folderDashboard_clr__a", x1: ".935", y1: "-646.246", x2: "13.935", y2: "-659.496", gradientTransform: "matrix(1 0 0 -1 0 -644.682)", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0", stopColor: "#7ea7f1" }), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#5885d8" })] })) }), (0, jsx_runtime_1.jsx)("path", { d: "M6.009 1.44A1.381 1.381 0 0 0 5.017 1H1.402A1.451 1.451 0 0 0 .01 2.503L0 11.497A1.46 1.46 0 0 0 1.402 13h11.196A1.46 1.46 0 0 0 14 11.497V3.995a1.46 1.46 0 0 0-1.402-1.503H6.99Z", fill: "url(#solid_folderDashboard_clr__a)" })] })));
}
exports.default = SolidFolderDashboardClr;
