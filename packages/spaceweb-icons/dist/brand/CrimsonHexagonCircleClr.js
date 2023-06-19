"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandCrimsonHexagonCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandCrimsonHexagonCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "7", fill: "#c22a37" }), (0, jsx_runtime_1.jsx)("path", { d: "m6.022 8.184-.933.933.342 1.274 1.274.34.932-.931-.341-1.275ZM5.457 6.74l-1.275-.342-.932.933.341 1.274 1.274.341.933-.933Zm.094-.333.934-.932-.342-1.274-1.274-.341-.933.932.342 1.273ZM8.463 7.49l-.934.933.343 1.274 1.273.34.933-.931-.342-1.274Zm-.416-1.674.933-.932-.341-1.274-1.274-.342-.932.933.34 1.274Zm.498 1.461 1.273.34.932-.932-.341-1.273-1.274-.342-.931.933Z", fill: "#fff" })] })));
}
exports.default = BrandCrimsonHexagonCircleClr;
