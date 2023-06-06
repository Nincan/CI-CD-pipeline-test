"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidFooter(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidFooter" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.258 1.014H.742a.7.7 0 00-.7.7v10.572a.7.7 0 00.7.7h12.516a.7.7 0 00.7-.7V1.714a.7.7 0 00-.7-.7zm-1.646 10.164H2.381a.6.6 0 010-1.199h9.23a.6.6 0 11.001 1.2z" }, void 0) }), void 0));
}
exports.default = SolidFooter;
