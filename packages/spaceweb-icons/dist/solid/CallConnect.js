"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCallConnect(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCallConnect" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.719 10.935s-1.801-1.194-2.385-1.6a1.323 1.323 0 00-1.111-.223s-1.29.763-1.556.89C8.4 10.13 8 9.78 8 9.78S4.506 6.41 4.222 6c-.283-.41.265-1.373.667-1.778.61-.613-.08-1.56-.08-1.56a26.882 26.882 0 00-1.83-2.31C2.03-.705.77.894.34 1.519a2.078 2.078 0 00-.33 1.326 19.982 19.982 0 004.312 7.024c3.238 3.236 5.6 3.8 6.61 4.04a1.94 1.94 0 001.459-.063 15.485 15.485 0 001.482-1.696 1.147 1.147 0 00-.153-1.215z" }), (0, jsx_runtime_1.jsx)("path", { d: "M8.773 5.89H7.567a.653.653 0 00-.617.605.653.653 0 00.617.605h1.206a3.325 3.325 0 002.448-1.125 3.04 3.04 0 00.793-2.537 3.272 3.272 0 00-3.3-2.766l-.085.001h-.02V.327A.353.353 0 008.277 0a.235.235 0 00-.247.152l-.84.823a.236.236 0 00-.129.18.37.37 0 00.116.315l.853.902a.312.312 0 00.247.084.583.583 0 00.32-.152.301.301 0 00.085-.244l.02-.228a2.101 2.101 0 012.15 1.828 1.911 1.911 0 01-.557 1.556 2.129 2.129 0 01-1.521.675z" })] })));
}
exports.default = SolidCallConnect;
