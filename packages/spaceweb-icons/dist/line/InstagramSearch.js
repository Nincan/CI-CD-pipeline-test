"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineInstagramSearch(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineInstagramSearch" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.822 12.963 10.61 9.752a5.98 5.98 0 1 0-.86.859l3.211 3.21a.608.608 0 1 0 .86-.858Zm-7.845-2.225a4.761 4.761 0 1 1 4.761-4.76 4.761 4.761 0 0 1-4.761 4.76Z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = LineInstagramSearch;
