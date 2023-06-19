"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFolderClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFolderClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M14 3.33v8.64a.776.776 0 01-.48.71.942.942 0 01-.3.06L7.09 2.57h6.14a.762.762 0 01.77.76z", fill: "#acdcfe" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.22 12.74H.78a.77.77 0 01-.77-.77V1.81a.767.767 0 01.47-.71.803.803 0 01.3-.06h4.78a.768.768 0 01.77.76.768.768 0 00.76.77z", fill: "#bbe5fe" })] })));
}
exports.default = SolidFolderClr;
