"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidEnlarge(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidEnlarge" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M12.5 0h-11A1.5 1.5 0 000 1.5v11A1.5 1.5 0 001.5 14h11a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0012.5 0zM1.574 2.046a.496.496 0 01.49-.5l.009-.001h.002L3.99 1.54a.5.5 0 11.003 1l-.715.002 1.766 1.766a.5.5 0 01-.707.707L2.574 3.252v.707a.5.5 0 11-1 0zm3.472 7.649l-1.762 1.763h.707a.5.5 0 110 1H2.077a.496.496 0 01-.499-.49l-.001-.01v-.001l-.005-1.916a.5.5 0 111-.003l.001.715L4.34 8.987a.5.5 0 01.707.708zm7.38 2.26a.496.496 0 01-.49.498l-.009.002h-.002l-1.915.005a.5.5 0 11-.003-1l.715-.002-1.766-1.766a.5.5 0 11.707-.707l1.763 1.763v-.707a.5.5 0 011 0zm-.496-7.492a.5.5 0 01-.502-.5l-.001-.714L9.66 5.015a.5.5 0 01-.707-.707l1.762-1.763h-.707a.5.5 0 010-1h1.914a.496.496 0 01.499.49l.001.009v.002l.005 1.915a.5.5 0 01-.498.502z" }) })));
}
exports.default = SolidEnlarge;
