"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineUnpin(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineUnpin" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M.2,12.73094a.2287.2287,0,0,0-.00289.3197l.72679.75814.00194.002a.22886.22886,0,0,0,.32359.00183l1.70825-1.67512L1.871,11.05Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.62,4.528,9.47334.38483A1.29932,1.29932,0,0,0,8.56073.00221a.01764.01764,0,0,0-.00976,0A1.29584,1.29584,0,0,0,7.25574,1.285L7.246,2.06445,3.82459,5.48583l-2.44574.01954a1.30712,1.30712,0,0,0-.93924.32136,1.29563,1.29563,0,0,0-.0577,1.8909l5.8982,5.89643a1.29671,1.29671,0,0,0,1.8332.00976,1.2675,1.2675,0,0,0,.3835-.95788l.01687-2.49368,3.42138-3.41961.77767-.01065A1.29689,1.29689,0,0,0,13.62,4.528Zm-2.21937.95877L7.2442,9.64138,7.183,12.71743l-2.95-2.95L1.34156,6.77662l3.01391-.02219L8.5119,2.59888l.05948-1.31565,4.128,4.18574Z" })] })));
}
exports.default = LineUnpin;
