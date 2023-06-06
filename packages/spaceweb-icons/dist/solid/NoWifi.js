"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidNoWifi(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidNoWifi" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "10.782", r: "1.237" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.677 4.531a10.483 10.483 0 00-9.49-2.022l1.57 1.57A8.222 8.222 0 017 3.982a8.61 8.61 0 015.484 1.972.93.93 0 001.25-.055.93.93 0 00-.057-1.367zm-2.584 4.007a.923.923 0 00-.08-1.385A6.706 6.706 0 007.532 5.86l2.943 2.943a.922.922 0 00.618-.266zM.879 1.823a.616.616 0 000 .872l.847.853a11.143 11.143 0 00-1.403.977.937.937 0 00-.056 1.373.93.93 0 001.249.055 8.707 8.707 0 011.583-1.032l1.397 1.397a6.763 6.763 0 00-1.509.835.927.927 0 001.144 1.459 4.9 4.9 0 011.855-.804l4.369 4.369a.616.616 0 00.871-.872L1.751 1.823a.616.616 0 00-.872 0z" }, void 0)] }), void 0));
}
exports.default = SolidNoWifi;
