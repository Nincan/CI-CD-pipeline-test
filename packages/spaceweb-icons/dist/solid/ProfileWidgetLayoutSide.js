"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidProfileWidgetLayoutSide(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidProfileWidgetLayoutSide" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.5 6.385H7.63a.495.495 0 0 1-.5-.5v-1.25a.495.495 0 0 1 .5-.5h5.87a.495.495 0 0 1 .5.5v1.25a.495.495 0 0 1-.5.5ZM13.5 9.915H7.63a.495.495 0 0 1-.5-.5v-1.25a.495.495 0 0 1 .5-.5h5.87a.495.495 0 0 1 .5.5v1.25a.495.495 0 0 1-.5.5ZM5.33 9.915H.5a.495.495 0 0 1-.5-.5v-4.83a.495.495 0 0 1 .5-.5h4.83a.495.495 0 0 1 .5.5v4.83a.495.495 0 0 1-.5.5Z" }, void 0) }), void 0));
}
exports.default = SolidProfileWidgetLayoutSide;
