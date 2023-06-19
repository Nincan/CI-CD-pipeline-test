"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandEllipsis(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandEllipsis" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zM4.866 7.843a1.005 1.005 0 01-2.01 0V6.157a1.005 1.005 0 112.01 0zm3.139 1.526a1.005 1.005 0 01-2.01 0V4.631a1.005 1.005 0 012.01 0zm3.139-1.526a1.005 1.005 0 01-2.01 0V6.157a1.005 1.005 0 112.01 0z" }) })));
}
exports.default = BrandEllipsis;
