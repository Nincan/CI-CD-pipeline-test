"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCollapse(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCollapse" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.244 6.598l4.764-.196a1.038 1.038 0 00.683-.309.92.92 0 00.08-1.294L9.205.23a.814.814 0 00-.65-.227 1.065 1.065 0 00-.954.99l-.196 4.764a.788.788 0 00.84.84zM6.598 8.244l-.196 4.764a1.038 1.038 0 01-.309.683.92.92 0 01-1.294.08L.23 9.205a.813.813 0 01-.227-.65 1.065 1.065 0 01.99-.954l4.764-.196a.788.788 0 01.84.84z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidCollapse;
