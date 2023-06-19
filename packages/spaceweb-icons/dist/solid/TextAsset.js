"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTextAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTextAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.063 0H1.937a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h10.126a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5zm-1.575 10.354H3.512a.6.6 0 110-1.199h6.976a.6.6 0 010 1.2zm0-2.755H3.512a.6.6 0 110-1.199h6.976a.6.6 0 110 1.2zm0-2.754H3.512a.6.6 0 010-1.199h6.976a.6.6 0 010 1.2z" }) })));
}
exports.default = SolidTextAsset;
