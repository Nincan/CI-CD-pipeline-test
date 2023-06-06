"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandTelegram(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandTelegram" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.921 6.622L9.18 3.22c.817-.356 3.578-1.488 3.578-1.488s1.277-.495 1.17.708c-.035.495-.32 2.233-.604 4.11l-.888 5.566s-.07.817-.674.956a2.926 2.926 0 01-1.772-.637c-.143-.106-2.66-1.702-3.578-2.48a.673.673 0 01.033-1.136c1.278-1.169 2.8-2.623 3.72-3.544.428-.427.851-1.416-.92-.214l-5 3.368a2.07 2.07 0 01-1.629.034C1.551 8.142.311 7.718.311 7.718s-.844-.532.61-1.096z" }, void 0) }), void 0));
}
exports.default = BrandTelegram;
