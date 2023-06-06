"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineLinkedInComment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineLinkedInComment" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.334.7H4.667a4.667 4.667 0 100 9.334H7V13.3l5.128-4.196A4.667 4.667 0 009.334.7zm1.951 7.372l-2.952 2.414V8.7H4.667a3.334 3.334 0 110-6.667h4.667a3.335 3.335 0 011.951 6.039z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M4.579 3.701h5.334V4.7H4.579zM4.579 5.701h3.81V6.7h-3.81z" }, void 0)] }), void 0));
}
exports.default = LineLinkedInComment;
