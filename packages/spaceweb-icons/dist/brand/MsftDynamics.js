"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandMsftDynamics(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandMsftDynamics" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.554.013v3.81L8.27 6.366l3.176-1.906zm0 13.974l8.893-4.446V5.094zm0-9.528l2.54 1.906-2.54 7.622z" }) })));
}
exports.default = BrandMsftDynamics;
