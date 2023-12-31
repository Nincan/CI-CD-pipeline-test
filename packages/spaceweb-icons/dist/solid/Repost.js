"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidRepost(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidRepost" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.89 10.963H3.635V6.655h1.642a.594.594 0 00.474-.232.353.353 0 00.063-.063.616.616 0 00-.063-.821L3.446 2.558a.523.523 0 00-.2-.137.875.875 0 00-.159-.042c-.031 0-.052-.01-.084-.01h-.01a.575.575 0 00-.232.052.476.476 0 00-.179.116c-.01 0-.021.01-.032.01v.01L.211 5.529a.642.642 0 00-.042.843.249.249 0 00.085.094.612.612 0 00.442.19H2.37v4.94a.634.634 0 00.632.632H6.89a.632.632 0 000-1.264zm.048-7.331h3.255V7.94H8.55a.594.594 0 00-.474.232.353.353 0 00-.063.063.616.616 0 00.063.822l2.305 2.98a.523.523 0 00.2.137.876.876 0 00.158.042c.032 0 .053.01.085.01h.01a.575.575 0 00.232-.052.476.476 0 00.179-.116c.01 0 .021-.01.032-.01v-.01l2.339-2.97a.642.642 0 00.042-.844.249.249 0 00-.085-.094.612.612 0 00-.442-.19h-1.675V3a.634.634 0 00-.632-.632H6.938a.632.632 0 000 1.264z" }) })));
}
exports.default = SolidRepost;
