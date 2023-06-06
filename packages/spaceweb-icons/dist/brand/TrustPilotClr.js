"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandTrustPilotClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandTrustPilotClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#51b27f", d: "M14 5.43L9.67 8.57 7 10.52l-4.33 3.14 1.66-5.09L0 5.43h5.35L7 .34l1.65 5.09H14zm-2.67 8.23L7 10.52l3.04-.8 1.29 3.94z" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#21512c", d: "M10.04 9.72l-3.04.8 2.67-1.95.37 1.15z" }, void 0)] }), void 0));
}
exports.default = BrandTrustPilotClr;
