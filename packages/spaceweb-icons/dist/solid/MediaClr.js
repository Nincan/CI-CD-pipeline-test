"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMediaClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 20 15.94", "data-icon-name": "SolidMediaClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#0091FF", d: "M6.4 3.05a2.13 2.13 0 110 4.27 2.13 2.13 0 010-4.27zm11.46-1.63H2.14c-.4 0-.72.32-.72.72v9.24l2.36-2.35a.71.71 0 011 0l2.36 2.35 5.93-5.93a.71.71 0 011 0l4.5 4.5V2.14c0-.4-.31-.72-.7-.72zm0-1.42C19.04 0 20 .96 20 2.14V13.8c0 1.18-.96 2.14-2.14 2.14H2.14A2.14 2.14 0 010 13.8V2.14C0 .96.96 0 2.14 0h15.72z" }) })));
}
exports.default = SolidMediaClr;
