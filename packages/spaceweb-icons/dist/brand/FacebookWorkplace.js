"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandFacebookWorkplace(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandFacebookWorkplace" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.421.049a6.104 6.104 0 014.85 9.813 1.358 1.358 0 01-1.04.556c-.741 0-.981-.53-1.206-1.097L8.912 6.584 7.804 9.32c-.189.464-.393 1.097-1.205 1.097s-1.02-.633-1.21-1.097L3.521 4.715h1.577L6.6 8.504 7.717 5.74c.174-.434.388-1.097 1.195-1.097s1.021.658 1.2 1.097l1.215 2.992a4.676 4.676 0 00-3.9-7.255 5.524 5.524 0 000 11.049 5.472 5.472 0 002.031-.388l.526 1.327a6.972 6.972 0 01-2.558.485 6.89 6.89 0 01-2.706-.546 6.998 6.998 0 01-3.7-3.694A6.96 6.96 0 014.72.6 6.798 6.798 0 017.421.049z" }) })));
}
exports.default = BrandFacebookWorkplace;
