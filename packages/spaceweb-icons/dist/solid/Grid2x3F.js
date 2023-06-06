"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidGrid2x3F(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid2x3F" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.419 2.223H.589a.5.5 0 00-.5.5v8.55a.5.5 0 00.5.5h4.184l.014.003.015-.003h8.617a.5.5 0 00.5-.5v-8.55a.5.5 0 00-.5-.5zm-4.61 4.21H5.287v-3.21h3.522zm0 1v3.34H5.287v-3.34zm4.11-1h-3.11v-3.21h3.11zm-8.632-3.21v3.21H1.089v-3.21zm-3.198 4.21h3.198v3.34H1.089z" }, void 0) }), void 0));
}
exports.default = SolidGrid2x3F;
