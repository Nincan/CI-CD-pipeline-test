"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandLivechat(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandLivechat" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.795 14h-7.59A3.205 3.205 0 010 10.795v-7.59A3.205 3.205 0 013.205 0h7.59A3.205 3.205 0 0114 3.205v7.59A3.205 3.205 0 0110.795 14zm-.18-12.605h-7.23a1.99 1.99 0 00-1.99 1.99v7.23a1.99 1.99 0 001.99 1.99h.533v.968s-.06.242.242.242l3.207-1.21h3.248a1.99 1.99 0 001.99-1.99v-7.23a1.99 1.99 0 00-1.99-1.99z" }), (0, jsx_runtime_1.jsx)("path", { d: "M2.607 3.656v6.812h3.708s.188-.542 0-1.187H3.982V3.656s-.854-.105-1.375 0zm8.521 1.27s.333-.625.333-1.062c0 0-1.02-.604-2.854-.125 0 0-2.062.604-2.062 3.396 0 0-.125 2.458 2.125 3.333 0 0 1.52.417 2.916-.167 0 0-.229-1.062-.375-1.125 0 0-1.187.605-2.312-.041 0 0-1.084-.48-.834-2.667 0 0 .19-2.479 3.063-1.542z" })] })));
}
exports.default = BrandLivechat;
