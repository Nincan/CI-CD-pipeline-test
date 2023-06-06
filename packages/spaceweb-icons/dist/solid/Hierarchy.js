"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidHierarchy(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidHierarchy" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.204 8.763h9.593L10.011 5.67H3.989L2.204 8.763zm7.23-4.093L7.433 1.205a.5.5 0 00-.866 0l-2 3.465zm4.402 7.625l-1.462-2.532H1.626L.164 12.295a.5.5 0 00.433.75h12.806a.5.5 0 00.433-.75z" }, void 0) }), void 0));
}
exports.default = SolidHierarchy;
