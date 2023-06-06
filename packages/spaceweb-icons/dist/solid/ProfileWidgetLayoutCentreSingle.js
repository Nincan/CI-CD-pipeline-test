"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidProfileWidgetLayoutCentreSingle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidProfileWidgetLayoutCentreSingle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.5 11.51H.5a.495.495 0 0 1-.5-.5V9.49a.495.495 0 0 1 .5-.5h13a.501.501 0 0 1 .5.5V11a.504.504 0 0 1-.5.51ZM9.05 7.58h-4.1a.495.495 0 0 1-.5-.5V2.99a.495.495 0 0 1 .5-.5h4.1a.495.495 0 0 1 .5.5v4.1a.493.493 0 0 1-.5.49Z" }, void 0) }), void 0));
}
exports.default = SolidProfileWidgetLayoutCentreSingle;
