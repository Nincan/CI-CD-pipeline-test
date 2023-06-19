"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidNotificationDisable(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidNotificationDisable" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7,14a1.38025,1.38025,0,0,0,1.37665-1.37573H5.62336A1.38131,1.38131,0,0,0,7,14Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.47163,5.84545A4.46885,4.46885,0,0,0,8.03321,1.49889V1.03228a1.03226,1.03226,0,1,0-2.06451,0v.46661a4.44855,4.44855,0,0,0-1.45563.6416l6.95856,6.95862Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.77332,12.79125,1.23652.25438A.7081.7081,0,0,0,.23512,1.25579l2.7218,2.7218A4.42347,4.42347,0,0,0,2.5293,5.84636V9.6292L1.15357,11.004v.68884h9.51862L12.772,13.79259a.70805.70805,0,0,0,1.00134-1.00134Z" })] })));
}
exports.default = SolidNotificationDisable;
