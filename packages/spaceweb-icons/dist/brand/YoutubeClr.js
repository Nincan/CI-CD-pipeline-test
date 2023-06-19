"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandYoutubeClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandYoutubeClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.707 3.63a1.753 1.753 0 00-1.237-1.237A41.84 41.84 0 007 2.1a41.84 41.84 0 00-5.47.293A1.753 1.753 0 00.293 3.63 18.22 18.22 0 000 7a18.22 18.22 0 00.293 3.37 1.753 1.753 0 001.237 1.237A41.84 41.84 0 007 11.9a41.84 41.84 0 005.47-.293 1.753 1.753 0 001.237-1.237A18.22 18.22 0 0014 7a18.22 18.22 0 00-.293-3.37z", fill: "red" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M5.6 9.1L9.237 7 5.6 4.9v4.2z" })] })));
}
exports.default = BrandYoutubeClr;
