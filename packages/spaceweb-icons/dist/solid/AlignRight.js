"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAlignRight(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 16 13", "data-icon-name": "SolidAlignRight" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.028 4.5a1 1 0 0 1 1-1h6.214a1 1 0 0 1 0 2H6.028a1 1 0 0 1-1-1zm-4.786 4a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2h-11a1 1 0 0 1-1-1z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M15.508 13a.25.25 0 0 1-.25-.25V.25a.25.25 0 0 1 .5 0v12.5a.25.25 0 0 1-.25.25z" }, void 0)] }), void 0));
}
exports.default = SolidAlignRight;