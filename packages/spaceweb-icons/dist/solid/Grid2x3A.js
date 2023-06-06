"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidGrid2x3A(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid2x3A" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.426 2.223H.596a.5.5 0 00-.5.5v8.55a.5.5 0 00.5.5h8.707l.015.003.014-.003h4.094a.5.5 0 00.5-.5v-8.55a.5.5 0 00-.5-.5zm-.5 4.21H9.818v-3.21h3.108zm-7.63 1h3.522v3.34H5.296zm0-1v-3.21h3.522v3.21zm-4.2 1h3.2v3.34h-3.2zm8.722 3.34v-3.34h3.108v3.34z" }, void 0) }), void 0));
}
exports.default = SolidGrid2x3A;
