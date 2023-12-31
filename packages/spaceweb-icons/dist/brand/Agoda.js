"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandAgoda(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandAgoda" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.93 5.45A3.84 3.84 0 007 1.52a3.84 3.84 0 00-3.93 3.93A3.84 3.84 0 007 9.37a3.84 3.84 0 003.93-3.92m-9.5 0A5.45 5.45 0 017 0a5.42 5.42 0 015.57 5.42v4.77a.8.8 0 01-.84.83.78.78 0 01-.85-.83V8.8h-.08a4.36 4.36 0 01-3.9 2.09 5.4 5.4 0 01-5.47-5.44m3.21 6.85a.85.85 0 10.84.85.85.85 0 00-.84-.84m-2.37-.01a.85.85 0 10.85.85.85.85 0 00-.85-.84M7 12.3a.85.85 0 10.85.85.85.85 0 00-.85-.84m4.73-.01a.85.85 0 10.84.85.85.85 0 00-.84-.84m-2.37-.01a.85.85 0 10.85.85.85.85 0 00-.85-.84" }) })));
}
exports.default = BrandAgoda;
