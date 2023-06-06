"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTableView(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTableView" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.66 5.5H14v3.43H4.66zm0-4.91v3.5H14v-2a1.5 1.5 0 00-1.5-1.5H4.66zm0 9.74v3.08h7.84a1.5 1.5 0 001.5-1.5v-1.58zm-1.4 3.08v-3.08H0v-1.4h3.26V5.5H0V4.1h3.26V.59H1.5A1.5 1.5 0 000 2.09v9.82a1.5 1.5 0 001.5 1.5h1.76z" }, void 0) }), void 0));
}
exports.default = SolidTableView;
