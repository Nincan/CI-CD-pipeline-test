"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderBarClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 30 30", "data-icon-name": "PlaceholderBarClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { opacity: ".5", d: "M0 8h24v6H0zm0 16h30v6H0z" }), (0, jsx_runtime_1.jsx)("path", { d: "M0 0h12v6H0zm0 16h20v6H0z" })] })));
}
exports.default = PlaceholderBarClr;
