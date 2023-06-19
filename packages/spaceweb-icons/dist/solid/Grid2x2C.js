"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGrid2x2C(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid2x2C" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.408 2.704H.578a.5.5 0 00-.5.5v8.55a.5.5 0 00.5.5h12.83a.5.5 0 00.5-.5v-8.55a.5.5 0 00-.5-.5zm-.5 4.2h-5.42v-3.2h5.42zm-11.83-3.2h5.41v3.2h-5.41zm6.41 7.55v-3.35h5.42v3.35z" }) })));
}
exports.default = SolidGrid2x2C;
