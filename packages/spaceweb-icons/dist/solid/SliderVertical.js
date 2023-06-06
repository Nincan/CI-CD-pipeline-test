"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSliderVertical(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSliderVertical" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.417 13.348V5.52a1.806 1.806 0 000-3.415V.652a.6.6 0 10-1.2 0v1.453a1.806 1.806 0 000 3.415v7.828a.6.6 0 101.2 0zm10.365 0V5.52a1.806 1.806 0 000-3.415V.652a.6.6 0 00-1.199 0v1.453a1.806 1.806 0 000 3.415v7.828a.6.6 0 001.2 0zM6.4.653v8a1.806 1.806 0 000 3.416v1.279a.6.6 0 101.2 0v-1.279a1.806 1.806 0 000-3.415v-8a.6.6 0 10-1.2 0z" }, void 0) }), void 0));
}
exports.default = SolidSliderVertical;
