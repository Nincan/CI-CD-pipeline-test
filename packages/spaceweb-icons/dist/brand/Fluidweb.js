"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandFluidweb(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandFluidweb" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.517 3.964a1.022 1.022 0 00-1.454.176L2.6 6.607a2.087 2.087 0 00-.058 2.973c.086.092.176.179.275.278.056-.054.108-.1.157-.15q1.24-1.24 2.476-2.483a.402.402 0 01.327-.136c.369.011.738.004 1.149.004a7.558 7.558 0 00.007.885.875.875 0 01-.32.807c-.772.74-1.517 1.508-2.275 2.264a1.588 1.588 0 01-.198.141l2.7 2.702a4 4 0 01-3.81-1.124q-.907-.9-1.806-1.81a3.96 3.96 0 01-.41-5.177 7.268 7.268 0 01.765-.856q2.39-2.401 4.79-4.792c.04-.04.085-.076.149-.133zm.803 7.596c.24-.243.483-.492.73-.74q.88-.883 1.764-1.764a1.058 1.058 0 00.256-1.542h3.892L8.637 12.89z" }) })));
}
exports.default = BrandFluidweb;
