"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandMediumSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandMediumSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M0 0h14v14H0z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M5.038 4.444A2.556 2.556 0 1 1 2.5 7a2.547 2.547 0 0 1 2.538-2.556Zm4.054.15c.7 0 1.269 1.077 1.269 2.406 0 1.329-.568 2.406-1.27 2.406S7.824 8.329 7.824 7s.568-2.406 1.269-2.406Zm1.962.25c.246 0 .446.966.446 2.156 0 1.19-.2 2.155-.446 2.155S10.607 8.19 10.607 7s.2-2.155.447-2.155Z", fill: "#fff" }, void 0)] }), void 0));
}
exports.default = BrandMediumSquareClr;