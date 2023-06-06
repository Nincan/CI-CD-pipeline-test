"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Search.svg instead.
 */
function LineSearch(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineSearch" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.64 12.538L9.295 8.194A5.061 5.061 0 006.271.239a5.08 5.08 0 00-2.562 9.822 5.02 5.02 0 004.485-.766l4.344 4.345a.778.778 0 001.102 0 .778.778 0 000-1.102zM1.693 5.208a3.516 3.516 0 113.516 3.517 3.511 3.511 0 01-3.516-3.516z" }, void 0) }), void 0));
}
exports.default = LineSearch;
