"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidUnarchive(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidUnarchive" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.58 1.786L12.51.492a1.118 1.118 0 00-.885-.423H2.383a1.145 1.145 0 00-.894.423L.426 1.786a1.508 1.508 0 00-.354.978v9.627a1.545 1.545 0 001.54 1.54h10.783a1.545 1.545 0 001.54-1.54V2.764a1.508 1.508 0 00-.354-.978zM9.153 7.77H7.774v2.341a.77.77 0 01-1.54 0v-2.34h-1.38a.381.381 0 01-.269-.655l2.15-2.15a.381.381 0 01.546 0l2.149 2.15a.385.385 0 01-.278.654zM1.928 2.38l.64-.77h8.872l.647.77z" }) })));
}
exports.default = SolidUnarchive;
