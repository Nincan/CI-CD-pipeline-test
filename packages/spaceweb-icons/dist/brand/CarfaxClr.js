"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandCarfaxClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandCarfaxClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#1c1c1a", fillRule: "evenodd", d: "M12.34 0H1.66A1.382 1.382 0 00.269 1.362V12.63A1.383 1.383 0 001.661 14h10.678a1.383 1.383 0 001.393-1.37V1.362A1.382 1.382 0 0012.339 0zm.795 12.63a.786.786 0 01-.796.773H1.661a.786.786 0 01-.796-.773V1.362A.784.784 0 011.66.597h10.678a.784.784 0 01.796.765z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#1c1c1a", d: "M1.46 1.15v11.63h11.13V1.15zm5.821 9.9c-2.309 0-3.54-1.708-3.54-4.012 0-2.502 1.465-4.009 3.55-4.009a2.953 2.953 0 013.198 2.286l-1.954.769c-.278-.725-.544-1.181-1.254-1.181-.9 0-1.289.902-1.289 2.135 0 1.192.378 2.138 1.311 2.138.677 0 .966-.368 1.388-1.103l1.82.97a3.341 3.341 0 01-3.23 2.006z" })] })));
}
exports.default = BrandCarfaxClr;
