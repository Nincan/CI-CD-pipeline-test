"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidArrowRight(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidArrowRight" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.991 6.51L1.384.05A.4.4 0 00.85.199.624.624 0 00.84.86L4.656 7 .84 13.138a.626.626 0 00.01.662.419.419 0 00.347.2.38.38 0 00.186-.05L12.99 7.488A.55.55 0 0013.25 7a.556.556 0 00-.259-.49z" }) })));
}
exports.default = SolidArrowRight;
