"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandDailyMotionClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandDailyMotionClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M0 0v14h14V0Z", fill: "#0064dc" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.395 1.971c0-.112-.01-.223-.015-.33-.058-.015-.089-.034-.116-.028-.691.141-1.382.278-2.068.436-.068.016-.147.157-.152.243-.017.353-.007.708-.007 1.062v1.962a3.174 3.174 0 0 0-3.762-.5 4.03 4.03 0 0 0-2.156 4.622 3.858 3.858 0 0 0 4.385 2.915 3.25 3.25 0 0 0 1.602-.803v.782c.137.015.248.036.359.037.511.003 1.021-.01 1.531.006.301.009.408-.078.408-.406-.013-3.333-.009-6.665-.009-9.998Zm-4.043 8.304a1.87 1.87 0 1 1-.084-3.737 1.822 1.822 0 0 1 1.837 1.914 1.78 1.78 0 0 1-1.753 1.823Z", fill: "#fff" })] })));
}
exports.default = BrandDailyMotionClr;
