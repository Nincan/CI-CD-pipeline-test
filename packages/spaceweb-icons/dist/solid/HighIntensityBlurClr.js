"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidHighIntensityBlurClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidHighIntensityBlurClr" }, props, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("pattern", (0, tslib_1.__assign)({ id: "highIntensityBlur_clr_a", viewBox: "0 0 10 10", width: "5%", height: "5%" }, { children: (0, jsx_runtime_1.jsx)("circle", { fill: "#c3c3c3", cx: "5", cy: "5", r: "2.5" }, void 0) }), void 0) }, void 0), (0, jsx_runtime_1.jsx)("rect", { width: "100%", height: "100%", fill: "url(#highIntensityBlur_clr_a)" }, void 0), (0, jsx_runtime_1.jsx)("path", { xmlns: "http://www.w3.org/2000/svg", d: "M9.203 7.096c-.044-.035-.093-.062-.138-.095a3.103 3.103 0 00-.192-.133 3.144 3.144 0 00-.302-.164c-.067-.033-.132-.067-.202-.095a3.082 3.082 0 00-.393-.123c-.053-.013-.103-.032-.156-.043a3.042 3.042 0 00-.59-.06h-.46a3.041 3.041 0 00-.59.06c-.053.01-.103.03-.156.043a3.094 3.094 0 00-.393.123c-.07.028-.135.062-.202.095a3.151 3.151 0 00-.302.164 3.16 3.16 0 00-.191.133c-.046.033-.095.06-.139.095l.016.006a3.111 3.111 0 00-1.16 2.408v1.596a.469.469 0 00.47.469h5.755a.469.469 0 00.468-.47V9.51a3.111 3.111 0 00-1.159-2.408zM7.007 5.891a1.733 1.733 0 10-1.733-1.733 1.734 1.734 0 001.733 1.733z" }, void 0)] }), void 0));
}
exports.default = SolidHighIntensityBlurClr;
