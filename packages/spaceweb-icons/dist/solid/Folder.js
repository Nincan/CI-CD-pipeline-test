"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFolder(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFolder" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.015 2.227a1.401 1.401 0 00-.991-.412H1.413a1.395 1.395 0 00-1.39 1.397l-.007 8.381a1.401 1.401 0 001.397 1.397h11.175a1.401 1.401 0 001.397-1.397V4.61a1.401 1.401 0 00-1.397-1.397H7z" }) })));
}
exports.default = SolidFolder;
