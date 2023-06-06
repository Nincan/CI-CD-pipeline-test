"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidComplaint(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidComplaint" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.918 12.72l-1.4-2.76a6.724 6.724 0 00.69-2.95 6.595 6.595 0 10-6.59 6.59 6.535 6.535 0 003.63-1.1l2.93 1.06a.78.78 0 00.21.04.677.677 0 00.27-.07.606.606 0 00.26-.81zM6.033 3.833a.7.7 0 111.4 0v3.679a.7.7 0 01-1.4 0zm.705 7.033a.785.785 0 11.78-.78.783.783 0 01-.78.78z" }, void 0) }), void 0));
}
exports.default = SolidComplaint;
