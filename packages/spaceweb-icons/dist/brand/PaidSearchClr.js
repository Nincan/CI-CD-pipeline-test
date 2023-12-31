"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandPaidSearchClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandPaidSearchClr" }, props, { children: (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fill: "#40A3F5" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.7 8.85v.348a.505.505 0 11-1.011 0V8.85a1.777 1.777 0 01-.78-.482.505.505 0 11.737-.691.756.756 0 001.306-.515.756.756 0 00-.755-.755 1.765 1.765 0 01-.505-3.455v-.349a.505.505 0 111.01 0v.349c.296.09.565.252.781.482a.508.508 0 01-.02.714.508.508 0 01-.714-.02.756.756 0 00-1.306.515c0 .415.34.754.754.754.974 0 1.765.791 1.765 1.765A1.77 1.77 0 016.699 8.85z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.653 12.703l-2.87-2.882a5.977 5.977 0 001.358-3.797A6.013 6.013 0 006.135.018 6.013 6.013 0 00.128 6.024a6.013 6.013 0 006.007 6.006c1.333 0 2.56-.441 3.558-1.178l2.897 2.91a.746.746 0 001.06.001.75.75 0 00.003-1.06zM1.429 6.024a4.712 4.712 0 014.706-4.706 4.711 4.711 0 014.706 4.706 4.712 4.712 0 01-4.706 4.706A4.712 4.712 0 011.43 6.024z" })] })) })));
}
exports.default = BrandPaidSearchClr;
