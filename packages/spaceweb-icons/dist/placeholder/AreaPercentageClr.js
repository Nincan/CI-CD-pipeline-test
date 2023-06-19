"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderAreaPercentageClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 40 26", "data-icon-name": "PlaceholderAreaPercentageClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { opacity: ".5", d: "M39 19.41V11l-9-4-8 4-4-4-8 3H1v9.34c2.6-1.07 9.39-3.85 9.5-3.82.28.07 6.97 4.08 6.97 4.08l8.87-5.6 7.94 3.82L39 19.41z" }), (0, jsx_runtime_1.jsx)("path", { d: "M.5.5v25h39V.5H.5zm1 10H10l7.87-2.92 4.03 4.03 8.11-4.06 8.49 3.77v7.39l-4.01-1.34-8.19-3.94-8.84 5.58c-6.49-3.89-6.75-3.96-6.83-3.98-.02-.01-.05-.01-.08-.01-.26 0-1.2.35-9.04 3.57V10.5zm37 14h-37v-4.83c4.87-2 8.2-3.35 8.96-3.62.8.43 4.46 2.6 6.75 3.98l.26.16 8.89-5.61 7.75 3.73 4.38 1.47v4.72zM29.99 6.45l-7.89 3.94-3.97-3.97L9.91 9.5H1.5v-8h37v8.73l-8.51-3.78z" })] })));
}
exports.default = PlaceholderAreaPercentageClr;
