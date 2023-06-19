"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidColumn1x2(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 58 40", "data-icon-name": "SolidColumn1x2" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { x: "4", y: "4", width: "15.3", height: "32", rx: "2" }), (0, jsx_runtime_1.jsx)("rect", { x: "21.3", y: "4", width: "32.7", height: "32", rx: "2" })] })));
}
exports.default = SolidColumn1x2;
