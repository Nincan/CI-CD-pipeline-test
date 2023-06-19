"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGoogleReportProblemLine(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGoogleReportProblemLine" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 3.786l4.393 7.589H2.607L7 3.785m0-2.327L.583 12.542h12.834L7 1.458zm.583 8.167H6.417v1.167h1.166V9.625zm0-3.5H6.417v2.333h1.166V6.125z" }) })));
}
exports.default = BrandGoogleReportProblemLine;
