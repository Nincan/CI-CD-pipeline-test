"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidReplyBoxCollapse(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidReplyBoxCollapse" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13 .783H1a1 1 0 00-1 1v10.434a1 1 0 001 1h12a1 1 0 001-1V1.783a1 1 0 00-1-1zm-2.198 6.683H3.198a.6.6 0 110-1.199h7.604a.6.6 0 110 1.2z" }) })));
}
exports.default = SolidReplyBoxCollapse;
