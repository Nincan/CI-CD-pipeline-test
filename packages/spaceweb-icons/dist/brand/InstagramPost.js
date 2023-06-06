"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandInstagramPost(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandInstagramPost" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.2 0A4.2 4.2 0 0 0 0 4.2v5.6A4.2 4.2 0 0 0 4.2 14h5.6A4.2 4.2 0 0 0 14 9.8V4.2A4.2 4.2 0 0 0 9.8 0ZM1.4 4.2a2.8 2.8 0 0 1 2.8-2.8h5.6a2.8 2.8 0 0 1 2.8 2.8v5.6a2.8 2.8 0 0 1-2.8 2.8H4.2a2.8 2.8 0 0 1-2.8-2.8Zm6.3 0a.7.7 0 1 0-1.4 0v2.1H4.2a.7.7 0 0 0 0 1.4h2.1v2.1a.7.7 0 0 0 1.4 0V7.7h2.1a.7.7 0 1 0 0-1.4H7.7Z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = BrandInstagramPost;
