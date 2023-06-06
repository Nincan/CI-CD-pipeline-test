"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandGoogleEventLine(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandGoogleEventLine" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.08 2.33h-.58V1.17H9.33v1.16H4.67V1.17H3.5v1.16h-.58c-.65 0-1.16.53-1.16 1.17l-.01 8.17c0 .64.52 1.16 1.17 1.16h8.16c.64 0 1.17-.52 1.17-1.16V3.5c0-.64-.53-1.17-1.17-1.17zm0 9.34H2.92V5.83h8.16v5.84zm0-7H2.92V3.5h8.16v1.17zM7 7.58h2.92v2.92H7V7.58z" }, void 0) }), void 0));
}
exports.default = BrandGoogleEventLine;
