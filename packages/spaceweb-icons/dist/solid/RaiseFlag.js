"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidRaiseFlag(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidRaiseFlag" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.26217,0A.63255.63255,0,0,0,.68852.56828V13.43173a.57368.57368,0,0,0,1.1473,0V7.57705H12.73506a.5884.5884,0,0,0,.54377-.37294.5809.5809,0,0,0-.17329-.63338L9.79513,3.78853l3.31041-2.78812a.57976.57976,0,0,0,.16731-.62748A.59082.59082,0,0,0,12.73506,0Z" }, void 0) }), void 0));
}
exports.default = SolidRaiseFlag;
