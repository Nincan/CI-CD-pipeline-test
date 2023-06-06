"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineDataChart(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 40 40", "data-icon-name": "LineDataChart" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.8 10.67A2.48 2.48 0 008.28 8.2a2.44 2.44 0 00-.03-.29l4.83-3.24a2.45 2.45 0 001.26.36l.21-.02 6.17 10.7a2.49 2.49 0 104.38.65l5.46-5.12a2.54 2.54 0 10-1.42-1.54l-5.47 5.12a2.46 2.46 0 00-.92-.18l-.2.02-6.18-10.7a2.47 2.47 0 10-4.5-1.4 2.46 2.46 0 00.04.36l-4.77 3.2a2.47 2.47 0 10-1.34 4.56zM23.7 28.4h-1.9a2.5 2.5 0 00-2.3 2.67v6.14a2.5 2.5 0 002.3 2.66h1.9A2.5 2.5 0 0026 37.2v-6.14a2.5 2.5 0 00-2.3-2.67zm.46 8.8a.57.57 0 01-.46.63h-1.9a.57.57 0 01-.46-.62v-6.14a.57.57 0 01.46-.63h1.9a.57.57 0 01.46.63z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M15.3 16.57h-1.9a2.28 2.28 0 00-2.3 2.26v18.78a2.28 2.28 0 002.3 2.26h1.9a2.28 2.28 0 002.29-2.26V18.83a2.28 2.28 0 00-2.3-2.26zm.46 21.04a.46.46 0 01-.46.45h-1.9a.46.46 0 01-.47-.45V18.83a.46.46 0 01.46-.45h1.9a.46.46 0 01.47.45zM6.74 19.88H4.71a2.5 2.5 0 00-2.44 2.54v14.9a2.5 2.5 0 002.44 2.55h2.03a2.5 2.5 0 002.44-2.55v-14.9a2.5 2.5 0 00-2.44-2.54zm.5 17.44a.56.56 0 01-.5.6H4.71a.56.56 0 01-.5-.6v-14.9a.55.55 0 01.5-.6h2.03a.55.55 0 01.5.6zM32.5 18.57h-2.04a2.6 2.6 0 00-2.44 2.72v15.86a2.6 2.6 0 002.44 2.72h2.04a2.6 2.6 0 002.44-2.72V21.3a2.6 2.6 0 00-2.44-2.72zm.49 18.58a.59.59 0 01-.5.64h-2.03a.59.59 0 01-.49-.64V21.3a.58.58 0 01.5-.64h2.03a.58.58 0 01.49.64z" }, void 0)] }), void 0));
}
exports.default = LineDataChart;