"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCheckBox(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 12 12", "data-icon-name": "SolidCheckBox" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.364 0H1.636c-.42 0-.799.164-1.09.424C.215.724 0 1.155 0 1.636v8.728C0 11.266.734 12 1.636 12h8.728c.902 0 1.636-.734 1.636-1.636V1.636C12 .734 11.266 0 10.364 0zM9.039 4.556L5.452 8.14a.49.49 0 01-.695 0L2.963 6.35a.494.494 0 01-.002-.697.494.494 0 01.697 0l1.447 1.445L8.342 3.86a.493.493 0 01.697.697z" }) })));
}
exports.default = SolidCheckBox;
