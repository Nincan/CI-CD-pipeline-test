"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidUserStar(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidUserStar" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "5.14", cy: "2.638", r: "2.652" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.806 11.064a1.205 1.205 0 0 1 .661-2.054l1.5-.218.365-.739a4.961 4.961 0 0 0-.855-.911 1.111 1.111 0 0 0-.187-.155 4.746 4.746 0 0 0-.293-.202 4.811 4.811 0 0 0-.463-.252c-.102-.05-.202-.103-.308-.145a4.715 4.715 0 0 0-.603-.188c-.08-.02-.157-.05-.238-.066a4.654 4.654 0 0 0-.904-.093H4.78a4.654 4.654 0 0 0-.903.093c-.082.016-.158.046-.239.066a4.727 4.727 0 0 0-.602.188c-.107.042-.206.095-.309.145a4.817 4.817 0 0 0-.462.252 4.82 4.82 0 0 0-.293.202 1.098 1.098 0 0 0-.187.155A4.761 4.761 0 0 0 .01 10.827v2.441a.718.718 0 0 0 .717.718h6.905a1.2 1.2 0 0 1 0-.38l.255-1.488Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.98 10.138a.205.205 0 0 0-.165-.14L11.8 9.705l-.9-1.825a.205.205 0 0 0-.369 0l-.9 1.825-2.014.293a.205.205 0 0 0-.114.35l1.457 1.42-.344 2.006a.205.205 0 0 0 .298.217l1.801-.947 1.801.947a.205.205 0 0 0 .298-.217l-.344-2.005 1.457-1.42a.205.205 0 0 0 .052-.211Z" })] })));
}
exports.default = SolidUserStar;
