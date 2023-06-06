"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineUnderlineText(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineUnderlineText" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.234 14.006H.766a.7.7 0 010-1.4h12.468a.7.7 0 010 1.4zM2.403 6.66V1.402a1.471 1.471 0 01.3-1.007A1.021 1.021 0 013.5.06a1.04 1.04 0 01.816.335 1.456 1.456 0 01.302 1.007V6.78a4.937 4.937 0 00.205 1.532 1.774 1.774 0 00.728.955 2.673 2.673 0 001.461.34 2.19 2.19 0 001.835-.69 3.38 3.38 0 00.537-2.092V1.402A1.476 1.476 0 019.68.392a1.02 1.02 0 01.798-.332 1.058 1.058 0 01.81.332 1.44 1.44 0 01.308 1.01V6.66a7.82 7.82 0 01-.249 2.14 3.309 3.309 0 01-.944 1.506 3.659 3.659 0 01-1.387.806 6.085 6.085 0 01-1.85.253 7.61 7.61 0 01-2.17-.273 3.476 3.476 0 01-1.483-.841 3.402 3.402 0 01-.843-1.462 7.434 7.434 0 01-.268-2.13z" }, void 0) }), void 0));
}
exports.default = LineUnderlineText;
