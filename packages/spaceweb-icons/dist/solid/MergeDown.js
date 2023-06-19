"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMergeDown(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMergeDown" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.982 0H9.245v1.496h1.742a.502.502 0 0 1 .502.502v5.511h1.496V1.003A1.003 1.003 0 0 0 11.982 0zM2.511 7.51V1.997a.502.502 0 0 1 .502-.502h1.743V0H2.018a1.003 1.003 0 0 0-1.003 1.003V7.51z" }), (0, jsx_runtime_1.jsx)("rect", { width: "11.971", height: "4.967", x: "1.015", y: "9.033", rx: "1" }), (0, jsx_runtime_1.jsx)("path", { d: "m4.605 5.417 1.978 1.898.002.001.001.002.002.001v.001h.001l.002.002a.697.697 0 0 0 .423.185.702.702 0 0 0 .492-.154q.025-.02.048-.042l1.974-1.894a.698.698 0 0 0 .024-.987.69.69 0 0 0-.516-.212c-.01 0-.017-.005-.026-.005H7.765V.696a.698.698 0 0 0-1.397 0v3.517H5.12c-.01 0-.02.006-.03.006a.696.696 0 0 0-.485 1.198z" })] })));
}
exports.default = SolidMergeDown;
