"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPhotoAssetClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPhotoAssetClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#DD273D", d: "M13.096 3.406L9.876.367A1.328 1.328 0 0 0 8.964 0H1.817c-.76 0-1.38.661-1.38 1.475v11.05c0 .814.62 1.475 1.38 1.475h10.366c.761 0 1.38-.661 1.38-1.474V4.512c0-.423-.17-.825-.467-1.106zm-2.747.643a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75zm-8.895 7.948L4.36 6.655a.696.696 0 0 1 1.237-.004l2.868 5.346h-7.01zm7.494 0l-1.29-2.39 1.01-1.53c.08-.128.216-.226.264-.197.09 0 .183.069.258.186l2.432 3.931H8.948z" }) })));
}
exports.default = SolidPhotoAssetClr;
