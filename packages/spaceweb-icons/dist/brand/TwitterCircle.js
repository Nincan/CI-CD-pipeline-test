"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandTwitterCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandTwitterCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0C3.1 0 0 3.1 0 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm3 5.4v.2c0 2.1-1.5 4.5-4.4 4.5-.9 0-1.7-.3-2.4-.7h.4c.7 0 1.4-.3 1.9-.7-.7 0-1.2-.5-1.4-1.1h.3c.1 0 .3 0 .4-.1-.7 0-1.2-.6-1.2-1.4.2.1.4.2.6.2-.4-.3-.6-.8-.6-1.3 0-.3.1-.6.2-.8.8 1 1.9 1.6 3.2 1.6v-.4c0-.9.7-1.6 1.5-1.6.4 0 .8.2 1.1.5.4-.1.7-.2 1-.4-.1.4-.4.7-.7.9.3 0 .6-.1.9-.2-.3.3-.5.6-.8.8z" }) })));
}
exports.default = BrandTwitterCircle;
