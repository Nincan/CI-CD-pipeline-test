"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidRejectCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidRejectCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.05 2.049a7 7 0 109.9 0 7.008 7.008 0 00-9.9 0zm7.537 3.366L8.004 6.998l1.584 1.584a.71.71 0 01-1.004 1.004L7 8.002 5.415 9.586a.71.71 0 01-1.003-1.003L5.997 7 4.412 5.414A.71.71 0 015.416 4.41L7 5.995l1.583-1.583a.71.71 0 011.003 1.003z" }) })));
}
exports.default = SolidRejectCircle;
