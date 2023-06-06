"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineBox(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 12 12", "data-icon-name": "LineBox" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.232.75H2.768C1.67.75.788 1.61.764 2.673l-.01 6.604.008.068a2.008 2.008 0 0 0 2.006 1.905h6.464c1.096 0 1.978-.86 2.005-1.925l.008-6.604-.007-.068A2.01 2.01 0 0 0 9.232.75zm1.011 2.017l-.003 6.498a1.005 1.005 0 0 1-1.008.983H2.768c-.551 0-.994-.432-1.011-1.015l.003-6.499a1.003 1.003 0 0 1 1.008-.983h6.464c.55 0 .993.433 1.011 1.016z" }, void 0) }), void 0));
}
exports.default = LineBox;
