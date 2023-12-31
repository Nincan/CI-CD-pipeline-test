"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSocialFeedbackCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSocialFeedbackCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm-.904 8.932a5.478 5.478 0 0 1-1.802-.32 1.946 1.946 0 0 0-1.343.643c-.137.158.401-1.11.243-1.228a2.47 2.47 0 0 1-1.099-1.95c0-1.576 1.824-2.854 4.073-2.854 2.251 0 4.075 1.278 4.075 2.854a2.015 2.015 0 0 1-.057.473 3.619 3.619 0 0 0-1.446-.291c-1.543 0-2.796.904-2.796 2.017a1.503 1.503 0 0 0 .152.656Zm5.106 1.052c-.1.074.244.885.156.784a1.258 1.258 0 0 0-.86-.41 3.52 3.52 0 0 1-1.198.204c-1.437 0-2.603-.817-2.603-1.825 0-1.007 1.166-1.824 2.604-1.824 1.438 0 2.604.817 2.604 1.824a1.579 1.579 0 0 1-.703 1.247Z" }) })));
}
exports.default = BrandSocialFeedbackCircle;
