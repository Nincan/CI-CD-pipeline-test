"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandPodcastCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandPodcastCircleClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#1423d3", d: "M7 .036A6.964 6.964 0 1013.964 7 6.964 6.964 0 007 .036zm.414 7.675v3.012a.414.414 0 01-.827 0V7.711A.82.82 0 016.173 7a.828.828 0 011.655 0 .814.814 0 01-.414.712zm.956.799a.421.421 0 01-.029-.55A1.607 1.607 0 008.656 7a1.65 1.65 0 00-2.04-1.606 1.646 1.646 0 00-.948 2.586.396.396 0 01-.025.517l-.029.03a.398.398 0 01-.591-.03 2.485 2.485 0 113.984-.045.42.42 0 01-.637.058zm1.792 1.154a.414.414 0 11-.638-.53 3.309 3.309 0 10-5.04.013.396.396 0 01-.02.538l-.02.02a.405.405 0 01-.592-.024 4.138 4.138 0 116.31-.017z" }) })));
}
exports.default = BrandPodcastCircleClr;
