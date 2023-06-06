"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineInstagranComment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineInstagranComment" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.7 10.306l.496 1.866-1.832-.514-.467.275a5.739 5.739 0 112.065-2.083zm-1.158 2.724a7.01 7.01 0 112.522-2.544l.649 2.436a.636.636 0 01-.787.776z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = LineInstagranComment;
