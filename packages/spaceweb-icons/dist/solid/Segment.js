"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSegment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSegment" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.3 0v14a7.039 7.039 0 010-14zm1.421 0v6.293H14A7.03 7.03 0 007.721 0zm0 7.707V14A7.025 7.025 0 0014 7.707z" }, void 0) }), void 0));
}
exports.default = SolidSegment;
