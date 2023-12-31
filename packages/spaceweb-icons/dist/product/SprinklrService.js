"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function ProductSprinklrService(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "ProductSprinklrService" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 3.36C4.762.391-.33 1.47.017 6.27c.181 2.469 1.957 4.558 3.678 6.021l.66-1.529a2.924 2.924 0 0 1 5.29 0l.66 1.529c1.715-1.463 3.497-3.552 3.678-6.02C14.33 1.468 9.238.39 7 3.36Zm0 5.136a1.65 1.65 0 1 1 1.65-1.65A1.65 1.65 0 0 1 7 8.496Z" }) })));
}
exports.default = ProductSprinklrService;
