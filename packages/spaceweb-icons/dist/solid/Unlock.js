"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidUnlock(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidUnlock" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.18065,4.85957h-6.23v-1.74a1.91132,1.91132,0,0,1,3.78-.4.60415.60415,0,0,0,1.18-.26,3.0967,3.0967,0,0,0-1.09-1.77,3.12228,3.12228,0,0,0-5.08,2.43v1.74h-.92a1.40407,1.40407,0,0,0-1.4,1.4v6.34a1.40411,1.40411,0,0,0,1.4,1.4h8.36a1.4041,1.4041,0,0,0,1.4-1.4v-6.34A1.40406,1.40406,0,0,0,11.18065,4.85957ZM7.6292,10.294v1.281a.60453.60453,0,1,1-1.20905,0V10.327a.96738.96738,0,0,1-.4-.77V9.55684a.98.98,0,0,1,1.96.00012A.964.964,0,0,1,7.6292,10.294Z" }) })));
}
exports.default = SolidUnlock;
