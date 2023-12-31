"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandUserFeedback(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandUserFeedback" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.63 9.126c0 1.233 1.426 2.233 3.184 2.233.529 0 1.027-.09 1.466-.25.161-.058.76.168 1.051.502.107.123-.313-.868-.191-.96.533-.4.86-.935.86-1.525 0-1.232-1.427-2.232-3.186-2.232-1.758 0-3.185 1-3.185 2.232z" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.709 8.562c0-1.36 1.532-2.468 3.42-2.468.646 0 1.252.13 1.768.357.046-.19.07-.382.07-.58 0-1.927-2.231-3.491-4.984-3.491S1 3.943 1 5.872c0 .922.51 1.76 1.344 2.385.193.144-.466 1.695-.297 1.502.452-.524 1.39-.877 1.643-.786.662.241 1.411.38 2.205.39a1.84 1.84 0 01-.186-.801z" })] })));
}
exports.default = BrandUserFeedback;
