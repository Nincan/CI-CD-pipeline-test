"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAssignCallCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAssignCallCircle" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zm1.1 4.237a1.381 1.381 0 11-1.38 1.381 1.38 1.38 0 011.38-1.38zM4.318 7.955a.029.029 0 01-.042-.023.174.174 0 01-.003-.034v-.75l-.012-.001q-.253-.004-.505.013a2.804 2.804 0 00-.411.059 1.551 1.551 0 00-.514.204.92.92 0 00-.346.393l-.009.017v-.01a2.042 2.042 0 01.047-.386 1.456 1.456 0 01.573-.875 2.025 2.025 0 01.63-.304 2.588 2.588 0 01.545-.103V5.458c.002-.036.026-.048.057-.029.016.01.031.022.046.033l1.514 1.097.113.082a.052.052 0 010 .091q-.829.605-1.659 1.208a.113.113 0 01-.024.015zm6.546 1.461a.347.347 0 01-.345.346H5.683a.346.346 0 01-.346-.346v-.345c0-.919 1.841-1.381 2.763-1.381.923 0 2.764.462 2.764 1.381z" }) })));
}
exports.default = SolidAssignCallCircle;
