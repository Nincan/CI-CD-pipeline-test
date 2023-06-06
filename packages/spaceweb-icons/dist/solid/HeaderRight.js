"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidHeaderRight(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidHeaderRight" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.26 1.015H.74a.7.7 0 0 0-.7.7v10.57a.7.7 0 0 0 .7.7h12.52a.7.7 0 0 0 .7-.7V1.715a.7.7 0 0 0-.7-.7ZM1.78 2.935a.495.495 0 0 1 .5-.5H7a.495.495 0 0 1 .5.5v1.29a.501.501 0 0 1-.5.5H2.28a.495.495 0 0 1-.5-.5Zm9.83 8.24H2.38a.6.6 0 1 1 0-1.2h9.23a.6.6 0 0 1 0 1.2Z" }, void 0) }), void 0));
}
exports.default = SolidHeaderRight;
