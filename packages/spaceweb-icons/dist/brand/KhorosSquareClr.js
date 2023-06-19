"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandKhorosSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandKhorosSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#2827cb", d: "M0 0h14v14H0z" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.851 6.826a4.908 4.908 0 0 1-2.551.713.539.539 0 1 1 0-1.078 3.818 3.818 0 0 0 3.807-3.612h1.1A4.921 4.921 0 0 1 6.85 6.826m2.334 4.346H8.081A3.868 3.868 0 0 0 5.617 7.8c.021 0 .032-.013.071-.023a3.144 3.144 0 0 0 .326-.094 1.87 1.87 0 0 0 .494-.208c.133-.067.285-.17.412-.24a4.87 4.87 0 0 1 2.265 3.938m.435-8.519v-.217H7.694v.217A3.4 3.4 0 0 1 4.3 6.048a.949.949 0 0 0-.952.946V7a.963.963 0 0 0 .952.952 3.4 3.4 0 0 1 3.394 3.394v.217H9.62v-.217a5.336 5.336 0 0 0-2.27-4.368 5.2 5.2 0 0 0 2.27-4.325", fill: "#fff" })] })));
}
exports.default = BrandKhorosSquareClr;
