"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSprinklrAlertsClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSprinklrAlertsClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.27 6.595h-2.508a.7.7 0 0 0-.66.466l-1.03 2.912-3.089-8.236a.738.738 0 0 0-.673-.454.7.7 0 0 0-.65.49L3.143 6.595H.73a.7.7 0 0 0 0 1.4h2.927a.7.7 0 0 0 .667-.49L5.386 4.13l3.049 8.132a.7.7 0 0 0 .655.454h.007a.7.7 0 0 0 .653-.467l1.507-4.255h2.013a.7.7 0 0 0 0-1.4Z", fill: "#3c56cd" }) })));
}
exports.default = BrandSprinklrAlertsClr;
