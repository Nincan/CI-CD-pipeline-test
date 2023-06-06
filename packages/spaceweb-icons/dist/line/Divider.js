"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineDivider(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineDivider" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.268.952H.718a.7.7 0 00-.7.7v10.624a.7.7 0 00.7.7h12.55a.7.7 0 00.7-.7V1.652a.7.7 0 00-.7-.7zM1.418 3.33h11.15v3.459H1.417zm0 8.246V8.189h11.15v3.387z" }, void 0) }), void 0));
}
exports.default = LineDivider;
