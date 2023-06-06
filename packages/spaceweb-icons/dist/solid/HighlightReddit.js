"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidHighlightReddit(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidHighlightReddit" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.29.12H2.71a.6.6 0 00-.6.6v7.83a.602.602 0 00.156.403l4.29 4.73a.601.601 0 00.888 0l4.29-4.73a.602.602 0 00.156-.403V.72a.6.6 0 00-.6-.6zM6.4 2.837a.6.6 0 011.2 0v4.037a.6.6 0 01-1.2 0zM7 9.891a.757.757 0 11.757-.757.757.757 0 01-.757.757z" }, void 0) }), void 0));
}
exports.default = SolidHighlightReddit;
