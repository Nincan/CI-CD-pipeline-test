"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGetSatisfactionCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGetSatisfactionCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#8C418E", cx: "7.124", cy: "7", r: "7" }), (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fillRule: "evenodd", clipRule: "evenodd", fill: "#FFF" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.846 6.445l-.842-.586.324-.913h-.906v-.979l-.906.196-.453-.848-.712.587-.777-.652-.453.783-.971-.326v.913h-.97l.193.912-.906.522.647.652-.712.652.842.653-.324.847.842.261.064.848.324-.065.712-1.109c-.421-.224-.563-1.108-.324-1.891.24-.783.991-1.207 2.46-1.24 1.469-.03 2.395.98 2.395.98L9.616 7.75l.583.456.582-.326-.518-.717.583-.718z" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.292 8.271c-.464-.206-1.957-.326-1.941-.782.016-.457.511-.423.841-.326.33.096.971.391.971.391l.518-.848s-.523-.527-1.748-.521-1.932.437-1.942 1.173c-.009.737.107 1.105.518 1.305.412.2 1.548.265 1.748.456.2.192.424.637-.453.652-.877.016-1.489-.521-1.489-.521l-.647.847s.796.64 1.747.653 2.308-.255 2.395-1.044c.087-.789-.053-1.228-.518-1.435z" })] }))] })));
}
exports.default = BrandGetSatisfactionCircleClr;
