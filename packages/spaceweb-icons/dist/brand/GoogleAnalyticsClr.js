"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandGoogleAnalyticsClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandGoogleAnalyticsClr" }, props, { children: (0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ fillRule: "evenodd", clipRule: "evenodd" }, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#F9AB00", d: "M9.704 1.67v10.5c0 1.175.811 1.83 1.671 1.83.795 0 1.67-.557 1.67-1.83V1.75c0-1.078-.795-1.75-1.67-1.75s-1.67.742-1.67 1.67" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#E37400", d: "M2.625 10.659a1.67 1.67 0 110 3.34 1.67 1.67 0 010-3.34zM7 5.329c.875 0 1.67.673 1.67 1.75v5.09C8.67 13.443 7.795 14 7 14c-.86 0-1.67-.654-1.67-1.83V7c0-.928.795-1.67 1.67-1.67z" }, void 0)] }), void 0) }), void 0));
}
exports.default = BrandGoogleAnalyticsClr;
