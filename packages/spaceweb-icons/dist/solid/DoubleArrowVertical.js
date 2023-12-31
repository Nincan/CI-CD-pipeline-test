"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDoubleArrowVertical(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDoubleArrowVertical" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.745 14a.82.82 0 0 1-.579-.237L4.69 11.334a.808.808 0 0 1-.25-.583.771.771 0 0 1 .248-.557.827.827 0 0 1 .567-.225h.048l.14-.014 1.482.014V4.045h-1.64a.833.833 0 0 1-.595-.237.783.783 0 0 1 0-1.127L7.15.236a.829.829 0 0 1 1.16.001l2.46 2.429a.803.803 0 0 1 .25.583.77.77 0 0 1-.247.557.827.827 0 0 1-.568.225h-.046l-.14.013-1.484-.013v5.924h1.656a.849.849 0 0 1 .61.251.784.784 0 0 1 0 1.128l-2.475 2.43a.823.823 0 0 1-.58.236Z" }) })));
}
exports.default = SolidDoubleArrowVertical;
