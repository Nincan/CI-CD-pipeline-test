"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidUnblock(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidUnblock" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.401 6.003a.5.5 0 01.5.5v.902a.5.5 0 01-.5.5h-.026l2.57 2.57A6.944 6.944 0 003.433.964l5.04 5.038zM1.33.5a.7.7 0 00-.991.99l1.167 1.167a6.936 6.936 0 009.745 9.746l1.185 1.185a.7.7 0 00.99-.99zm2.177 7.405a.5.5 0 01-.5-.5v-.902a.5.5 0 01.5-.5h1.345l1.901 1.902z" }, void 0) }), void 0));
}
exports.default = SolidUnblock;
