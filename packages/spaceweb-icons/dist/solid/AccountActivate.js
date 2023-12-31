"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAccountActivate(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAccountActivate" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.85 2.15H1.15A1.1 1.1 0 00.045 3.255v7.493A1.1 1.1 0 001.15 11.85h11.702a1.1 1.1 0 001.103-1.103V3.254A1.1 1.1 0 0012.85 2.15zM4.22 4.369a1.079 1.079 0 11-1.08 1.08 1.09 1.09 0 011.08-1.08zm2.086 4.976a.292.292 0 01-.288.288H2.42a.292.292 0 01-.287-.288V8.78a1.942 1.942 0 01.719-1.498H2.84c.024-.024.06-.036.084-.06l.12-.084c.06-.036.12-.072.191-.108.036-.024.084-.036.12-.06l.252-.072a.226.226 0 00.096-.024 1.862 1.862 0 01.372-.036h.287a1.862 1.862 0 01.372.036.282.282 0 00.096.024c.084.024.168.048.24.072a.375.375 0 01.12.06c.072.036.132.072.192.108a.728.728 0 01.12.084c.023.024.06.036.083.06h-.012a1.961 1.961 0 01.72 1.498v.564zm5.335-1.151H8.69A.494.494 0 018.2 7.7a.502.502 0 01.491-.491h2.95a.492.492 0 110 .983zm.036-1.63h-2.95a.492.492 0 010-.984h2.95a.492.492 0 110 .983z" }) })));
}
exports.default = SolidAccountActivate;
