"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandFacebookCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandFacebookCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0C3.1 0 0 3.1 0 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm2 4.5h-.8s-.6 0-.6.6v1H9l-.2 1.4H7.6v3.3H6.2V7.5H5V6.1h1.2V4.9s.1-1.6 1.6-1.6c0 0 1 0 1.2.1v1.1z" }, void 0) }), void 0));
}
exports.default = BrandFacebookCircle;
