"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidVolume(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidVolume" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.021 5.45v3.102a.778.778 0 00.775.776h2.327l2.551 2.551A.778.778 0 007 11.329V2.666a.778.778 0 00-1.326-.55L3.123 4.674H.796a.778.778 0 00-.775.776zM10.49 7.002a3.49 3.49 0 00-1.94-3.125v6.243A3.47 3.47 0 0010.49 7zM8.55 1.147v.155a.721.721 0 00.466.659 5.429 5.429 0 010 10.08.71.71 0 00-.465.66v.155a.699.699 0 00.938.66 6.97 6.97 0 000-13.028.696.696 0 00-.938.659z" }) })));
}
exports.default = SolidVolume;
