"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderBarSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 30 30", "data-icon-name": "PlaceholderBarSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M0 0h12v6H0z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#4CD2E0", d: "M0 8h24v6H0z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#CBD756", d: "M0 16h20v6H0z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#87BD66", d: "M0 24h30v6H0z" })] })));
}
exports.default = PlaceholderBarSelectedClr;
