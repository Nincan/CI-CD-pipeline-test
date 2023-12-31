"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidOptionsVertical(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 3 14", "data-icon-name": "SolidOptionsVertical" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "1.5", cy: "1.5", r: "1.5" }), (0, jsx_runtime_1.jsx)("circle", { cx: "1.5", cy: "7", r: "1.5" }), (0, jsx_runtime_1.jsx)("circle", { cx: "1.5", cy: "12.5", r: "1.5" })] })));
}
exports.default = SolidOptionsVertical;
