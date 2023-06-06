"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidOptions(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 13 13", "data-icon-name": "SolidOptions" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3,6.41058a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,3,6.41058Zm3.5-1.5a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,6.5,4.91058Zm5,0a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,11.5,4.91058Z" }, void 0) }), void 0));
}
exports.default = SolidOptions;
