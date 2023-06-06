"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCalender(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCalender" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.747 7.69h-2.07a.692.692 0 00-.689.69v2.069a.692.692 0 00.69.69h2.07a.692.692 0 00.689-.69v-2.07a.692.692 0 00-.69-.69zm0-6.898v.69H4.23v-.69a.69.69 0 00-1.38 0v.69h-.69a1.373 1.373 0 00-1.372 1.38L.78 12.518a1.38 1.38 0 001.38 1.38h9.656a1.384 1.384 0 001.38-1.38V2.861a1.384 1.384 0 00-1.38-1.379h-.69v-.69a.69.69 0 10-1.379 0zm2.07 11.726H2.16V5.62h9.656z" }, void 0) }), void 0));
}
exports.default = SolidCalender;
