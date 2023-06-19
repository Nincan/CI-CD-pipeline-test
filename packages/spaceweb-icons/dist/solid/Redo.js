"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidRedo(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidRedo" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.082 8.34a.875.875 0 00.523 1.2.858.858 0 001.047-.447 5.556 5.556 0 018.588-1.828L8.907 8.598a.7.7 0 00.496 1.193h3.9A.7.7 0 0014 9.093v-3.9a.698.698 0 00-1.193-.488l-1.319 1.318A7.315 7.315 0 00.082 8.34z" }) })));
}
exports.default = SolidRedo;
