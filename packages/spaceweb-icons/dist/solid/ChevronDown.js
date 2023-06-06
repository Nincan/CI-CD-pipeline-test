"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidChevronDown(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidChevronDown" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.72 2.901H2.28a.779.779 0 00-.636 1.23l4.72 6.64a.779.779 0 001.27 0l4.722-6.64a.779.779 0 00-.634-1.23z" }, void 0) }), void 0));
}
exports.default = SolidChevronDown;
