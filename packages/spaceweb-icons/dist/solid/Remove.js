"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidRemove(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidRemove" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.00049.025a6.9751,6.9751,0,1,0,6.9751,6.9746A6.98327,6.98327,0,0,0,7.00049.025ZM9.665,7.59924H4.33594a.59961.59961,0,1,1,0-1.19921H9.665a.59961.59961,0,1,1,0,1.19921Z" }, void 0) }), void 0));
}
exports.default = SolidRemove;
