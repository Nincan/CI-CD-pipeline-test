"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandWhatsapp(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandWhatsapp" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M11.924 2.06a6.924 6.924 0 00-10.895 8.353L.047 14l3.67-.963a6.917 6.917 0 003.307.843h.003a6.925 6.925 0 004.897-11.82zM7.027 12.71h-.002a5.744 5.744 0 01-2.929-.801l-.21-.125-2.177.571.58-2.123-.136-.218a5.754 5.754 0 114.874 2.697zm3.156-4.308c-.173-.087-1.023-.505-1.182-.563s-.274-.087-.389.086a9.923 9.923 0 01-.548.679c-.1.115-.201.13-.374.043a4.722 4.722 0 01-1.391-.859 5.211 5.211 0 01-.963-1.198c-.1-.173-.01-.267.076-.353.078-.077.173-.202.26-.303a1.182 1.182 0 00.173-.288.319.319 0 00-.015-.303c-.043-.087-.389-.938-.533-1.285-.14-.337-.283-.291-.39-.297a6.954 6.954 0 00-.33-.006.635.635 0 00-.462.217 1.94 1.94 0 00-.605 1.443 3.364 3.364 0 00.706 1.789 7.71 7.71 0 002.955 2.612 9.934 9.934 0 00.986.364 2.37 2.37 0 001.09.069 1.781 1.781 0 001.167-.823 1.447 1.447 0 00.1-.822c-.043-.073-.158-.116-.33-.202z" }) })));
}
exports.default = BrandWhatsapp;
