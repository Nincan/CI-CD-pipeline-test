"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandAzureBot(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandAzureBot" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 1 0 7 7 6.994 6.994 0 0 0-7-7Zm0 12.765A5.765 5.765 0 1 1 12.765 7 5.765 5.765 0 0 1 7 12.765Z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "5.682", cy: "7", r: ".659" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.953 5.188h-.33a.218.218 0 0 0-.247.247v4.694a.531.531 0 0 0 .495.495h4.611a.218.218 0 0 0 .247-.248v-.329a.218.218 0 0 0-.247-.247H4.365a.08.08 0 0 1-.083-.082V5.435c-.082-.164-.164-.247-.33-.247Z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "8.235", cy: "7", r: ".659" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.8 3.376H5.518a.218.218 0 0 0-.247.248v.329a.218.218 0 0 0 .247.247h4.117a.08.08 0 0 1 .083.082v4.283a.218.218 0 0 0 .247.247h.33a.218.218 0 0 0 .246-.247V3.87a.531.531 0 0 0-.494-.495Z" })] })));
}
exports.default = BrandAzureBot;
