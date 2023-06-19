"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandAvaya(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandAvaya" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M4.153 9.72H8.31l.672 1.664H3.373l-.896 1.911H0L6.144.705h1.714L14 13.295h-2.476L7 3.574 4.153 9.72z" }) })));
}
exports.default = BrandAvaya;
