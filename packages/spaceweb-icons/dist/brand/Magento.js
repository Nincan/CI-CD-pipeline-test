"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandMagento(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandMagento" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.766 4.199v7.975l-.77.479-.77-.482V4.205L4.233 5.457v6.819L6.996 14l2.787-1.736V5.452L7.766 4.199z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M6.996 0 1.185 3.589v6.821l1.509.906V4.495l4.304-2.667 4.307 2.663.018.011-.002 6.804 1.494-.896V3.589L6.996 0z" }, void 0)] }), void 0));
}
exports.default = BrandMagento;
