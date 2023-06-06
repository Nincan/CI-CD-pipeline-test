"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Agent.svg instead.
 */
function ProductAgent(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "ProductAgent" }, props, { children: (0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 8.782a3.61 3.61 0 01-3.606-3.605C3.394 3.189 5.012 1.57 7 1.57s3.605 1.618 3.605 3.606A3.61 3.61 0 017 8.782zm0-6.39a2.788 2.788 0 00-2.785 2.785A2.788 2.788 0 007 7.962a2.788 2.788 0 002.785-2.785A2.788 2.788 0 007 2.392z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M11.878 3.728C11.28 1.585 9.33 0 7 0S2.72 1.585 2.122 3.728c-.435.27-.727.75-.727 1.298v.752a1.534 1.534 0 002.34 1.3.974.974 0 00.459-.831v-1.69a.973.973 0 00-.458-.83 1.516 1.516 0 00-.691-.216C3.673 1.938 5.205.82 7 .82s3.326 1.117 3.955 2.69a1.514 1.514 0 00-.69.215.973.973 0 00-.46.831v1.69c0 .34.172.651.46.83.242.153.522.233.808.233.845 0 1.532-.687 1.532-1.532v-.752c0-.549-.292-1.027-.727-1.298z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.173 6.848H7.26a.41.41 0 010-.82h2.913a.41.41 0 010 .82zM13.06 14A6.076 6.076 0 007 8.318 6.076 6.076 0 00.94 14h12.12z" }, void 0)] }, void 0) }), void 0));
}
exports.default = ProductAgent;
