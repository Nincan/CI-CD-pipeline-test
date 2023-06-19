"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderStreamSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 26 30", "data-icon-name": "PlaceholderStreamSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#CBD756", d: "M3.866 8.628h18.177v1H3.866zm0 3.172h13.823v1H3.866zm0 3.174h3.979v1H3.866z" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.866 5.454h6.499v1H3.866zm0 15h6.499v1H3.866z", fill: "#87BD66" }), (0, jsx_runtime_1.jsx)("path", { fill: "#CBD756", d: "M3.866 23.628h18.177v1H3.866z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M22.5 30h-19C1.57 30 0 28.43 0 26.5v-23C0 1.57 1.57 0 3.5 0h19C24.43 0 26 1.57 26 3.5v23c0 1.93-1.57 3.5-3.5 3.5zM3.5 1A2.503 2.503 0 001 3.5v23C1 27.879 2.122 29 3.5 29h19c1.379 0 2.5-1.121 2.5-2.5v-23C25 2.122 23.879 1 22.5 1h-19z" })] })));
}
exports.default = PlaceholderStreamSelectedClr;
