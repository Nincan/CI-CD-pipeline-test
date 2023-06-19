"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandTiktokVerifiedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandTiktokVerifiedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "7", fill: "#72cddd" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.367 4.659a.787.787 0 0 0-1.113 0L6.472 7.44 4.9 5.868A.787.787 0 0 0 3.786 6.98l2.129 2.13a.788.788 0 0 0 1.114 0l3.338-3.339a.787.787 0 0 0 0-1.114Z", fill: "#fff" })] })));
}
exports.default = BrandTiktokVerifiedClr;
