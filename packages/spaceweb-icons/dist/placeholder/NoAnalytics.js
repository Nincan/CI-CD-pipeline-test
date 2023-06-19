"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderNoAnalytics(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 40 40", "data-icon-name": "PlaceholderNoAnalytics" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.8 10.67a2.476 2.476 0 002.476-2.475 2.443 2.443 0 00-.03-.295l4.83-3.241a2.453 2.453 0 001.269.36c.07 0 .136-.015.205-.021l6.17 10.692a2.487 2.487 0 104.375.658l5.467-5.117a2.541 2.541 0 10-1.428-1.539l-5.468 5.117a2.462 2.462 0 00-.917-.18c-.07 0-.136.014-.205.02L16.373 3.957a2.475 2.475 0 10-4.505-1.415 2.46 2.46 0 00.038.373l-4.77 3.2A2.474 2.474 0 105.8 10.672zm20.19 20.4V40H19.5v-8.93a2.52 2.52 0 012.3-2.67h1.9a2.505 2.505 0 012.29 2.67z" }), (0, jsx_runtime_1.jsx)("path", { d: "M17.59 18.83V40H11.1V18.83a2.277 2.277 0 012.29-2.26h1.91a2.277 2.277 0 012.29 2.26zm-8.41 3.59V40H2.27V22.42a2.49 2.49 0 012.44-2.54h2.03a2.49 2.49 0 012.44 2.54zm25.76-1.13V40h-6.92V21.29a2.602 2.602 0 012.44-2.72h2.04a2.602 2.602 0 012.44 2.72z" })] })));
}
exports.default = PlaceholderNoAnalytics;
