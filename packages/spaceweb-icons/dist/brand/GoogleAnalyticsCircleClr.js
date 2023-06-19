"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGoogleAnalyticsCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGoogleAnalyticsCircleClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", fill: "#E37400", d: "M4.5 9.091a.954.954 0 110 1.908.954.954 0 010-1.908zM7 6.045c.5 0 .954.385.954 1v2.909c0 .728-.5 1.046-.954 1.046-.491 0-.955-.374-.955-1.046V7c0-.53.455-.955.955-.955zM9.5 3c.5 0 .954.384.954 1v5.954c0 .728-.5 1.046-.954 1.046-.491 0-.955-.374-.955-1.046v-6A.97.97 0 019.5 3zM0 7a7 7 0 1014 0A7 7 0 000 7z" }) })));
}
exports.default = BrandGoogleAnalyticsCircleClr;
