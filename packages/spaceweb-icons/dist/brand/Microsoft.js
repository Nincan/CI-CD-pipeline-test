"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandMicrosoft(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandMicrosoft" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M0 0h6.625v6.625H0zM0 7.375h6.625V14H0zM7.375 0H14v6.625H7.375zM7.375 7.375H14V14H7.375z" }) })));
}
exports.default = BrandMicrosoft;
