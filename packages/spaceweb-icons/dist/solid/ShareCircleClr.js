"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidShareCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidShareCircleClr" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7.046", r: "6.954", fill: "#a0a0a8" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M11.049 6.403L8.27 3.64a.516.516 0 00-.054-.05.33.33 0 00-.274-.069.349.349 0 00-.289.364v1.192l-.009.001a5.511 5.511 0 00-1.344.234 4.323 4.323 0 00-2.606 2.01 4.26 4.26 0 00-.605 2.549.345.345 0 00.29.334.323.323 0 00.066.006.352.352 0 00.313-.21 2.794 2.794 0 01.16-.279 3.18 3.18 0 011.466-1.168 4.618 4.618 0 011.805-.332c.127-.001.243.004.366.008l.098.003v1.289a.347.347 0 00.314.363.318.318 0 00.04.003.386.386 0 00.272-.133l1.844-1.862.925-.932a.353.353 0 000-.558z" }, void 0)] }), void 0));
}
exports.default = SolidShareCircleClr;
