"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandEmailCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandEmailCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40A3F5", cx: "7", cy: "7", r: "7" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M7 9.895H3.454a.551.551 0 0 1-.55-.55v-4.69c0-.303.247-.55.55-.55h7.092c.303 0 .55.247.55.55v4.69c0 .303-.247.55-.55.55H6.59m-2.666-.993c.045.05.108.078.171.078a.22.22 0 0 0 .151-.057l1.971-1.738.64.496c.04.033.09.048.14.048s.1-.015.142-.048l.66-.51 1.95 1.75a.23.23 0 0 0 .322-.018.23.23 0 0 0-.017-.323L8.166 6.886l1.878-1.458a.226.226 0 0 0 .04-.32.226.226 0 0 0-.32-.04L6.999 7.216l-.65-.506-2.112-1.64a.226.226 0 0 0-.32.041c-.078.1-.06.242.04.32l1.896 1.472-1.905 1.68a.223.223 0 0 0-.023.32z" }, void 0)] }), void 0));
}
exports.default = BrandEmailCircleClr;
