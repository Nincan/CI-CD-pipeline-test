"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidProfileWidgetLayoutCentre(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidProfileWidgetLayoutCentre" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.5 9.77H.5a.495.495 0 0 1-.5-.5V7.76a.495.495 0 0 1 .5-.5h13a.495.495 0 0 1 .5.5v1.51a.495.495 0 0 1-.5.5ZM13.5 13.55H.5a.495.495 0 0 1-.5-.5v-1.51a.495.495 0 0 1 .5-.5h13a.495.495 0 0 1 .5.5v1.51a.495.495 0 0 1-.5.5ZM9.05 5.55h-4.1a.495.495 0 0 1-.5-.5V.95a.495.495 0 0 1 .5-.5h4.1a.495.495 0 0 1 .5.5v4.1a.501.501 0 0 1-.5.5Z" }) })));
}
exports.default = SolidProfileWidgetLayoutCentre;
