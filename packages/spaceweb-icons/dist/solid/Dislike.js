"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDislike(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDislike" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.306 1.023H11.67a.694.694 0 0 0-.694.694v5.737c0 .383.31.694.694.694h1.637a.694.694 0 0 0 .694-.694V1.717a.694.694 0 0 0-.694-.694zM8.38.824H2.766a1.924 1.924 0 0 0-.205-.01c-.754 0-1.625.418-1.81 1.594L.01 7.144a.667.667 0 0 0-.006.062c-.008.12-.025.749.425 1.23.202.215.571.472 1.182.472h3.08l.018 2.616c.02.678.462 1.663 1.597 1.663.08 0 .163-.005.252-.016a.694.694 0 0 0 .607-.689v-2.118c.003-.05.09-1.629 2.36-2.38A.694.694 0 0 0 10 7.325v-4.88C9.988 1.785 9.546.824 8.38.824z" }) })));
}
exports.default = SolidDislike;
