"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandJive(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandJive" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.8 11.6c.2-.1.3-.1.5-.2.6-.3.9-.8.9-1.4V2.5c.4.1.7.1 1.1.2l1.8.3c.1 0 .1.1.1.1v7.4c0 .9-.2 1.6-.8 2.2-.5.5-1 .8-1.6 1-.3.1-.6.2-.8.3h-.1c-.3-.7-.6-1.3-.9-2-.1-.1-.1-.3-.2-.4z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.8 11.6c.1.1.1.3.2.4.3.7.6 1.3.9 2H4.8v-2.4zM6.2 0h3v2h-.7l-2.2-.2c-.1 0-.1 0-.1-.1V0z" })] })));
}
exports.default = BrandJive;
