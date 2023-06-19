"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGridRow1x3B(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGridRow1x3B" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.406 4.429H.577a.5.5 0 00-.5.5v4.35a.5.5 0 00.5.5h12.83a.5.5 0 00.5-.5V4.93a.5.5 0 00-.5-.5zm-12.329 1h3.2v3.35h-3.2zm8.72 3.35V5.43h3.11v3.35z" }) })));
}
exports.default = SolidGridRow1x3B;
