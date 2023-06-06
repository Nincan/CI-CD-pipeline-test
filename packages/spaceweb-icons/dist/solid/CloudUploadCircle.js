"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCloudUploadCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCloudUploadCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.959.041A7.045 7.045 0 000 7 6.959 6.959 0 106.959.041zm3.082 10.24H4.076a2.262 2.262 0 01-.497-4.474 1.607 1.607 0 011.59-1.392.896.896 0 01.498.1 2.797 2.797 0 012.386-1.293 2.903 2.903 0 012.883 2.585 2.445 2.445 0 011.391 2.187 2.312 2.312 0 01-2.286 2.287z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7.009 9.035a.298.298 0 01-.299-.298V5.96a.298.298 0 11.597 0v2.776a.297.297 0 01-.298.298z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M5.965 7.303a.298.298 0 01-.21-.509l1.043-1.043a.298.298 0 11.421.42L6.176 7.217a.297.297 0 01-.211.087z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M8.052 7.303a.296.296 0 01-.21-.087L6.798 6.172a.298.298 0 01.421-.421l1.044 1.043a.298.298 0 01-.21.509z" }, void 0)] }), void 0));
}
exports.default = SolidCloudUploadCircle;
