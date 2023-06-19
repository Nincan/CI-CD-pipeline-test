"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandServiceNow(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandServiceNow" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 .684a7 7 0 00-7 7 6.923 6.923 0 002.42 5.294c.834.708 1.78-.204 2.591-.614a4.002 4.002 0 011.892-.452 4.2 4.2 0 012.176.486c.87.334 1.529 1.205 2.204.823C13.103 12.192 14 9.937 14 7.684a7 7 0 00-7-7zm0 10.608a3.608 3.608 0 113.608-3.608A3.608 3.608 0 017 11.292z" }) })));
}
exports.default = BrandServiceNow;
