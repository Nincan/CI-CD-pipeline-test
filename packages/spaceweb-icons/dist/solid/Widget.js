"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidWidget(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidWidget" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.406 8.812v4.444a.743.743 0 0 0 .741.74h4.444a.743.743 0 0 0 .74-.74V8.812a.743.743 0 0 0-.74-.74H8.147a.743.743 0 0 0-.74.74ZM.741 13.996h4.444a.743.743 0 0 0 .74-.74V8.812a.743.743 0 0 0-.74-.74H.74a.743.743 0 0 0-.741.74v4.444a.743.743 0 0 0 .74.74ZM0 1.406v4.443a.743.743 0 0 0 .74.74h4.444a.743.743 0 0 0 .741-.74V1.405a.743.743 0 0 0-.74-.74H.74a.743.743 0 0 0-.741.74ZM9.591.22 6.444 3.36a.738.738 0 0 0 0 1.045L9.59 7.553a.738.738 0 0 0 1.045 0l3.147-3.148a.738.738 0 0 0 0-1.044L10.643.22a.747.747 0 0 0-1.052 0Z" }, void 0) }), void 0));
}
exports.default = SolidWidget;
