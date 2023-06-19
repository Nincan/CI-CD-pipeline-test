"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDecisionBox(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDecisionBox" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.4 6.1L6.1.4c.5-.5 1.3-.5 1.8 0l5.7 5.7c.5.5.5 1.3 0 1.8l-5.7 5.7c-.5.5-1.3.5-1.8 0L.4 7.9c-.5-.5-.5-1.3 0-1.8z" }) })));
}
exports.default = SolidDecisionBox;
