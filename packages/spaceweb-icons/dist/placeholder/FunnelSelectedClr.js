"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderFunnelSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 38 26", "data-icon-name": "PlaceholderFunnelSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M0 0h38v5H0z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#4CD2E0", d: "M8 7h22v5H8z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#CBD756", d: "M12 14h15v5H12z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#87BD66", d: "M16 21h6v5h-6z" })] })));
}
exports.default = PlaceholderFunnelSelectedClr;
