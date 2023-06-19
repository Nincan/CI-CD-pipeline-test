"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidHeaderCenter(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidHeaderCenter" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.26 1.015H.74a.7.7 0 0 0-.7.7v10.57a.7.7 0 0 0 .7.7h12.52a.7.7 0 0 0 .7-.7V1.715a.7.7 0 0 0-.7-.7Zm-9.13 1.92a.495.495 0 0 1 .5-.5h4.72a.495.495 0 0 1 .5.5v1.29a.495.495 0 0 1-.5.5H4.63a.495.495 0 0 1-.5-.5Zm7.48 8.24H2.38a.6.6 0 1 1 0-1.2h9.23a.6.6 0 1 1 0 1.2Z" }) })));
}
exports.default = SolidHeaderCenter;
