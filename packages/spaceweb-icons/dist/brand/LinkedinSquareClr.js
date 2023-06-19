"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandLinkedinSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandLinkedinSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#069", d: "M0 0h14v14H0z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M4.618 3.638a.928.928 0 01-1.004.931.932.932 0 11.024-1.861.92.92 0 01.98.93zm-1.923 7.654V5.304h1.862v5.988zm2.976-4.078c0-.747-.024-1.371-.049-1.91H7.24l.085.833h.037a2.15 2.15 0 011.85-.968c1.224 0 2.143.82 2.143 2.584v3.54H9.492v-3.32c0-.77-.27-1.298-.943-1.298a1.022 1.022 0 00-.955.698 1.341 1.341 0 00-.062.466v3.453H5.671z" })] })));
}
exports.default = BrandLinkedinSquareClr;
