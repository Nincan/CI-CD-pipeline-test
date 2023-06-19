"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandIntranetCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandIntranetCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40A3F5", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M10.264 10.743c-.791.182-1.597-.385-1.697-1.194a1.39 1.39 0 01.208-.942c.024-.037.015-.056-.012-.084l-.435-.453-.734-.734-.007-.006c-.366.223-.748.234-1.138.02L5.215 8.584c.226.364.293.753.176 1.166-.096.342-.299.61-.597.802a1.41 1.41 0 01-1.836-.275 1.42 1.42 0 01.003-1.834 1.422 1.422 0 011.941-.197l1.212-1.212c-.24-.398-.242-.79-.007-1.184L5.01 4.75a.833.833 0 01-.67.15.846.846 0 01-.452-1.41.85.85 0 011.093-.121c.307.21.464.615.312 1.014L6.437 5.53c.39-.223.775-.215 1.16.021l1.13-1.128c-.248-.52.106-1.14.695-1.195a.85.85 0 01.917.754.849.849 0 01-1.314.792l-1.11 1.111c.206.37.205.74-.008 1.115l1.225 1.224a1.49 1.49 0 01.449-.22c.784-.232 1.632.292 1.772 1.096a1.41 1.41 0 01-1.089 1.644z" })] })));
}
exports.default = BrandIntranetCircleClr;
