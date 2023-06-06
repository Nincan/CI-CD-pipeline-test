"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Download.svg instead.
 */
function LineDownload(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineDownload" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M.67 0h12.66a.6.6 0 01.599.6v3.553a.6.6 0 11-1.2 0V1.2H1.271v2.953a.6.6 0 11-1.2 0V.6a.6.6 0 01.6-.6z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.236 9.647a.6.6 0 00-.848-.017l-1.8 1.728V3.7a.6.6 0 10-1.2 0v7.68L4.483 9.595a.6.6 0 10-.82.875l2.916 2.734c.036.034.08.054.122.077.022.013.04.032.064.041a.598.598 0 00.224.045.598.598 0 00.229-.047c.003-.002.007-.001.01-.002.008-.004.012-.014.02-.018a.594.594 0 00.157-.1l2.816-2.704a.6.6 0 00.016-.848z" }, void 0)] }), void 0));
}
exports.default = LineDownload;
