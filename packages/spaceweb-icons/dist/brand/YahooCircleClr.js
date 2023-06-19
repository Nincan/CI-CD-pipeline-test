"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandYahooCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandYahooCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#720E9E", d: "M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M10.205 5.526l.008-.002.231-.258h-.011l.025-.04H7.209l.125.445h.887l-1.492 1.38c-.305-.443-1.018-1.464-1.516-2.23h.925v-.315l.013-.09-.013-.002v-.037H2.625v.444h1.099C4.151 5.173 6 7.42 6.067 7.633c.027.2.066 1.386-.014 1.475-.096.138-1.096.064-1.272.077l-.007.435c.322.01 1.288 0 1.614 0 .642 0 1.767-.017 1.925-.004l.02-.412-1.293-.02c-.027-.186-.057-1.365-.03-1.494.123-.373 2.106-1.918 2.31-1.976l.192-.043h.6l.093-.145zm-.485 3.08l.562.043.655-2.402a28.07 28.07 0 0 1-1.232-.117l.015 2.476zm-.097.385l.003.587.285.023.307.022.09-.574-.324-.015-.36-.043z" })] })));
}
exports.default = BrandYahooCircleClr;
