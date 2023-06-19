"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAlignCenter(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 13 13", "data-icon-name": "SolidAlignCenter" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.5 0a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.5 0V.25A.25.25 0 0 1 6.5 0z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13 8.5a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h11a1 1 0 0 1 1 1zm-2.393-4a1 1 0 0 1-1 1H3.393a1 1 0 0 1 0-2h6.214a1 1 0 0 1 1 1z" })] })));
}
exports.default = SolidAlignCenter;
