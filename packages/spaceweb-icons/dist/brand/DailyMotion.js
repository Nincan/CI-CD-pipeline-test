"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandDailyMotion(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandDailyMotion" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M0 0v14h14V0Zm11.996 12.375c-.51-.016-1.02-.003-1.531-.006-.111-.001-.222-.022-.359-.037v-.782a3.25 3.25 0 0 1-1.602.803 3.858 3.858 0 0 1-4.385-2.915 4.03 4.03 0 0 1 2.156-4.622 3.174 3.174 0 0 1 3.762.5V3.354c0-.354-.01-.709.007-1.062.005-.086.084-.227.152-.243.686-.158 1.377-.295 2.068-.436.027-.006.058.013.116.028.005.107.015.218.015.33 0 3.333-.004 6.665.009 9.998 0 .328-.107.415-.408.406Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M8.268 6.538a1.87 1.87 0 1 0 .084 3.737 1.78 1.78 0 0 0 1.753-1.823 1.822 1.822 0 0 0-1.837-1.914Z" }, void 0)] }), void 0));
}
exports.default = BrandDailyMotion;
