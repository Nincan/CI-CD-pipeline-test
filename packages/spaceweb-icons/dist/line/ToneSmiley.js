"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineToneSmiley(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineToneSmiley" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 1 0 7 7 7.006 7.006 0 0 0-7-7Zm0 12.6A5.6 5.6 0 1 1 12.6 7 5.607 5.607 0 0 1 7 12.6Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.017 7.644a.677.677 0 0 0-.93.332 2.314 2.314 0 0 1-2.092 1.359 2.239 2.239 0 0 1-.77-.136.684.684 0 0 0-.886.438.725.725 0 0 0 .42.92 3.446 3.446 0 0 0 1.236.227 3.674 3.674 0 0 0 3.327-2.159.718.718 0 0 0-.305-.98ZM5.865 5.297A1.135 1.135 0 1 0 4.73 6.432a1.135 1.135 0 0 0 1.135-1.135ZM9.27 4.162a1.135 1.135 0 1 0 1.136 1.135A1.135 1.135 0 0 0 9.27 4.162Z" }, void 0)] }), void 0));
}
exports.default = LineToneSmiley;
