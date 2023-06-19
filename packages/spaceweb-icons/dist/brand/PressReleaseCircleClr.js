"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandPressReleaseCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandPressReleaseCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40A3F5", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M7.936 3.844c-.224.225-.351.51-.382.802l1.46 1.46a1.33 1.33 0 10-1.078-2.261zM7.74 8.23a.323.323 0 01-.455 0L5.4 6.348a.323.323 0 010-.455l1.299-1.3a.323.323 0 01.455 0L9.04 6.476a.323.323 0 010 .455l-1.3 1.3zm-6.55 3.363l4.576-4.576.879.879-4.576 4.575z" })] })));
}
exports.default = BrandPressReleaseCircleClr;
