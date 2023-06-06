"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTag(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTag" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.568 6.717L7.286.436A1.387 1.387 0 006.302.03H1.417A1.4 1.4 0 00.02 1.427v4.885a1.393 1.393 0 00.411.991l6.282 6.282a1.387 1.387 0 00.984.405 1.365 1.365 0 00.984-.412l4.886-4.886a1.365 1.365 0 00.411-.984 1.41 1.41 0 00-.411-.99zM2.463 3.521A1.047 1.047 0 113.51 2.474 1.046 1.046 0 012.463 3.52z" }, void 0) }), void 0));
}
exports.default = SolidTag;
