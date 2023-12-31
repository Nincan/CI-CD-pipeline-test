"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandPaidSearch(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandPaidSearch" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.7 8.9v.3c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-.3c-.3-.1-.6-.3-.8-.5-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 .3.3.8.3 1.1 0 .2-.1.3-.3.3-.5 0-.4-.3-.8-.8-.8-1 0-1.8-.8-1.8-1.8 0-.8.5-1.5 1.3-1.7v-.3c0-.3.2-.5.5-.5s.5.2.5.5V3c.3 0 .6.2.8.4.2.2.2.5 0 .7-.2.2-.5.2-.7 0-.3-.3-.8-.3-1.1 0-.2.1-.3.3-.3.5 0 .4.3.8.8.8 1 0 1.8.8 1.8 1.8 0 .7-.6 1.4-1.3 1.7z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.7 12.7l-2.9-2.9c.9-1.1 1.4-2.4 1.4-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.3 0 2.6-.4 3.6-1.2l2.9 2.9c.3.3.8.3 1.1 0 .1-.2.1-.7-.1-1zM1.4 6c0-2.6 2.1-4.7 4.7-4.7s4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7S1.4 8.6 1.4 6z" })] })));
}
exports.default = BrandPaidSearch;
