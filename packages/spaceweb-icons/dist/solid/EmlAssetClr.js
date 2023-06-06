"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidEmlAssetClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidEmlAssetClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.923 3.406L9.703.367A1.328 1.328 0 008.79 0H1.644a1.432 1.432 0 00-1.38 1.475v11.05A1.432 1.432 0 001.644 14H12.01a1.43 1.43 0 001.38-1.474V4.512a1.522 1.522 0 00-.467-1.106zm-2.837 1.333L6.824 6.962 3.564 4.74zm.508 4.83a.482.482 0 01-.477.486h-6.58a.482.482 0 01-.478-.486V5.272l3.567 2.432c.005.003.011.002.016.005a.35.35 0 00.178.055l.004.002.004-.002a.35.35 0 00.178-.055c.006-.003.012-.002.017-.005l3.57-2.436z", fill: "#2e3192" }, void 0) }), void 0));
}
exports.default = SolidEmlAssetClr;
