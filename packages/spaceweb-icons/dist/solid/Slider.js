"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSlider(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSlider" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.652 2.417H8.48a1.806 1.806 0 003.415 0h1.453a.6.6 0 100-1.2h-1.453a1.806 1.806 0 00-3.415 0H.652a.6.6 0 000 1.2zm0 10.365H8.48a1.806 1.806 0 003.415 0h1.453a.6.6 0 000-1.199h-1.453a1.806 1.806 0 00-3.415 0H.652a.6.6 0 100 1.2zM13.347 6.4h-8a1.806 1.806 0 00-3.416 0H.652a.6.6 0 100 1.2h1.279a1.806 1.806 0 003.415 0h8a.6.6 0 000-1.2z" }) })));
}
exports.default = SolidSlider;
