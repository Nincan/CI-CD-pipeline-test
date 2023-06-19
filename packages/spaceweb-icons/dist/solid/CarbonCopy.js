"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCarbonCopy(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCarbonCopy" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.839 5.84H4.097v-.582H1.776v3.484h2.321V8.16H5.84v1.16a1.165 1.165 0 01-1.161 1.162H1.195A1.164 1.164 0 01.035 9.32V4.68a1.165 1.165 0 011.16-1.162h3.483a1.165 1.165 0 011.16 1.162zm8.127 0h-1.743v-.582H9.902v3.484h2.321V8.16h1.742v1.16a1.165 1.165 0 01-1.16 1.162H9.32A1.164 1.164 0 018.16 9.32V4.68a1.165 1.165 0 011.16-1.162h3.483a1.165 1.165 0 011.16 1.162v1.16z" }) })));
}
exports.default = SolidCarbonCopy;
