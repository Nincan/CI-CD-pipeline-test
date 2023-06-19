"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderAudienceStreamClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 26 20", "data-icon-name": "PlaceholderAudienceStreamClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.87 7.63h18.18v1H3.87zm0 3.17h18.18v1H3.87zm0 3h10v1h-10z", opacity: ".5" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.87 4.45h6.5v1h-6.5z" }), (0, jsx_runtime_1.jsx)("path", { d: "M22.5 0h-19C1.57 0 0 1.57 0 3.5v13C0 18.43 1.57 20 3.5 20h19c1.93 0 3.5-1.57 3.5-3.5v-13C26 1.57 24.43 0 22.5 0zM25 16.5a2.5 2.5 0 01-2.5 2.5h-19A2.5 2.5 0 011 16.5v-13A2.5 2.5 0 013.5 1h19A2.5 2.5 0 0125 3.5v13z" })] })));
}
exports.default = PlaceholderAudienceStreamClr;
