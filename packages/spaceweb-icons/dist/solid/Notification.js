"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidNotification(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 15 15", "data-icon-name": "SolidNotification" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.5 15c.811 0 1.475-.663 1.475-1.474h-2.95A1.48 1.48 0 0 0 7.5 15zm4.791-4.683V6.263a4.788 4.788 0 0 0-3.684-4.657v-.5a1.105 1.105 0 1 0-2.212 0v.5A4.788 4.788 0 0 0 2.71 6.264v4.053L1.236 11.79v.738h12.528v-.738l-1.473-1.473z" }) })));
}
exports.default = SolidNotification;
