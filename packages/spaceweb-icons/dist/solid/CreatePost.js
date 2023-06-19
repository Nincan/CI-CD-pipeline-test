"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCreatePost(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCreatePost" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.98 9.509l-1.883.404h-.275l-.091-.024a1.562 1.562 0 01-1.269-1.788l.295-1.78a2.795 2.795 0 01.732-1.459L9.31.885H1.5a1.5 1.5 0 00-1.5 1.5V12.5A1.5 1.5 0 001.5 14h10.115a1.5 1.5 0 001.5-1.5V4.817L9.332 8.754a2.66 2.66 0 01-1.351.755z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.496.47a1.77 1.77 0 00-2.402 0L6.22 5.545a1.806 1.806 0 00-.475.94l-.295 1.772a.562.562 0 00.447.646.283.283 0 00.095.01l1.778-.382a1.66 1.66 0 00.842-.47l4.895-5.095A1.726 1.726 0 0014 1.723 1.799 1.799 0 0013.496.47z" })] })));
}
exports.default = SolidCreatePost;
