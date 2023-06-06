"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTwitterHome(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTwitterHome" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "m1.372 4.765-.674.382a.469.469 0 0 1-.636-.172.461.461 0 0 1 .173-.632L6.151.988a1.722 1.722 0 0 1 1.698 0l5.916 3.355a.461.461 0 0 1 .173.632.469.469 0 0 1-.636.172l-.674-.382-.899 6.472a2.328 2.328 0 0 1-2.311 2H4.582a2.328 2.328 0 0 1-2.311-2ZM7 9.068A2.007 2.007 0 1 0 4.978 7.06 2.015 2.015 0 0 0 7 9.068Z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidTwitterHome;
