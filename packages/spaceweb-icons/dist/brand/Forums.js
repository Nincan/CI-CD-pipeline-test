"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandForums(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandForums" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.826 13.998c.121-.63.406-1.194.258-1.6-.15-.413-.765-.636-1.113-1.003C.177 9.506-.463 7.275.344 4.786 1.189 2.18 3.064.604 5.759.118c3.248-.584 6.418 1.08 7.675 3.94 1.726 3.928-.661 8.49-4.927 9.266-1.843.336-3.727.45-5.68.674zm6.814-3.141c-.176-.512-.333-.892-.43-1.287-.037-.149.009-.39.112-.49 1.026-.988 1.346-2.164.85-3.487-.488-1.298-1.518-1.941-2.879-2.086-1.522-.163-3.123.942-3.483 2.41-.38 1.556.42 3.204 1.91 3.738 1.248.448 2.537.783 3.92 1.202z" }, void 0) }), void 0));
}
exports.default = BrandForums;
