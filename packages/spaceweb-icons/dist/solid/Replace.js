"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidReplace(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidReplace" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.6 11.3a2.06 2.06 0 01-2.1-2V6.94l.9.83a.72.72 0 001 0 .64.64 0 000-.94l-2.1-2a.72.72 0 00-1 0l-2.1 2a.64.64 0 000 .94.72.72 0 001 0l.9-.83V9.3a3.42 3.42 0 003.5 3.33h2.8V11.3H5.6zm8.2-5.8a.73.73 0 00-1 0l-.9.83V3.97A3.42 3.42 0 008.4.63H5.6v1.34h2.8a2.05 2.05 0 012.1 2v2.36l-.9-.83a.72.72 0 00-1 0 .64.64 0 000 .94l2.1 2a.72.72 0 001 0l2.1-2a.64.64 0 000-.94z", fillRule: "evenodd" }) })));
}
exports.default = SolidReplace;
