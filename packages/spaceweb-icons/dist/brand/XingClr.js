"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandXingClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandXingClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#085D5C", d: "M4.165 2.463L1.02 2.439 2.756 5.74.332 9.673l3.144.024 2.423-3.933z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#D2D400", d: "M10.355 0l3.313.025-4.939 8.529L11.886 14l-3.308-.025-3.16-5.446z" })] })));
}
exports.default = BrandXingClr;
