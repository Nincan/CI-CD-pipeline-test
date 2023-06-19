"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderPieClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 33 33", "data-icon-name": "PlaceholderPieClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M24.7 23.46l-.33.36a10.1 10.1 0 01-7.47 3.27h-.01c-3.03 0-5.88-1.34-7.83-3.68l-.33-.39-4.42 3.86.32.38a16.06 16.06 0 0012.26 5.7h.01a16.1 16.1 0 0011.83-5.2l.34-.37-4.37-3.93zM7.39 13.21a10.18 10.18 0 019.2-6.51l.49-.01V.83l-.51.01A16.01 16.01 0 001.92 11.06l-.18.46 5.47 2.15.18-.46z", opacity: ".5" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.69 16.88c0-1.25.24-2.48.7-3.67l.18-.46-5.47-2.16-.18.47a16.08 16.08 0 002.7 16.2l.33.39 4.41-3.86-.31-.38a10.2 10.2 0 01-2.36-6.53zM28.26 5.54A15.97 15.97 0 0016.9.82l-.21.01-.62.01v5.87l.82-.03a10.21 10.21 0 017.47 17.13l-.35.37 4.37 3.93.33-.36a16 16 0 004.23-10.86 15.88 15.88 0 00-4.68-11.35z" })] })));
}
exports.default = PlaceholderPieClr;
