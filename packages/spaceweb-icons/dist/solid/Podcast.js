"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPodcast(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPodcast" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.387 7a1.364 1.364 0 01-.693 1.19v5.046a.695.695 0 01-.693.692.695.695 0 01-.693-.693V8.192A1.372 1.372 0 015.615 7a1.386 1.386 0 112.772 0zM6.135 2.93a4.15 4.15 0 00-2.446 6.576.667.667 0 00.99.049l.049-.048a.663.663 0 00.042-.867 2.757 2.757 0 011.586-4.33 2.765 2.765 0 013.417 2.688 2.691 2.691 0 01-.527 1.608.705.705 0 00.049.921.704.704 0 001.067-.097A4.105 4.105 0 0011.159 7a4.161 4.161 0 00-5.024-4.067zM6.19.118A6.922 6.922 0 001.728 11.49a.678.678 0 00.99.042l.035-.035a.663.663 0 00.035-.9 5.545 5.545 0 118.44-.021.693.693 0 00.034.935.698.698 0 001.033-.048A6.923 6.923 0 006.19.118z" }) })));
}
exports.default = SolidPodcast;
