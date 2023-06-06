"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandYoutube(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandYoutube" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.707 3.63a1.753 1.753 0 00-1.237-1.237A41.84 41.84 0 007 2.1a41.84 41.84 0 00-5.47.293A1.753 1.753 0 00.293 3.63 18.219 18.219 0 000 7a18.219 18.219 0 00.293 3.37 1.753 1.753 0 001.237 1.237A41.84 41.84 0 007 11.9a41.84 41.84 0 005.47-.293 1.753 1.753 0 001.237-1.237A18.219 18.219 0 0014 7a18.219 18.219 0 00-.293-3.37zM5.6 9.1V4.9L9.237 7z" }, void 0) }), void 0));
}
exports.default = BrandYoutube;
