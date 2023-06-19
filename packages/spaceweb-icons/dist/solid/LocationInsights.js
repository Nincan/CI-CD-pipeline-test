"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLocationInsights(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLocationInsights" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M13.734 12.455l.001-.001-2.66-2.66c-.02.027-.044.047-.063.074a6.172 6.172 0 10-1.145 1.143c-.025.02-.047.044-.073.065l2.66 2.66a.905.905 0 001.28-1.281zm-7.594-1.69v-.001a4.625 4.625 0 11-.136-9.25h.136a4.625 4.625 0 110 9.25z" }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M6.135 3.04a2.303 2.303 0 00-2.326 2.278c0 .903 1.196 2.63 1.873 3.535a.569.569 0 00.906 0C7.264 7.948 8.46 6.22 8.46 5.318a2.303 2.303 0 00-2.326-2.279zm0 3.18a.948.948 0 11.967-.947.957.957 0 01-.967.948z" })] })));
}
exports.default = SolidLocationInsights;
