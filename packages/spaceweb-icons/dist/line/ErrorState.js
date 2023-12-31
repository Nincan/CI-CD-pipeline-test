"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineErrorState(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 40 40", "data-icon-name": "LineErrorState" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M39.16 28.94L24.1 2.88A3.9 3.9 0 0021.4.92c-1.92-.31-3.8.85-4.82 2.96l-.08.1L.7 31.36a2.43 2.43 0 002.1 3.63h31.68c2.27 0 4.73-1.03 5.2-3.35a3.9 3.9 0 00-.52-2.7zm-36.64 3.8a.31.31 0 010-.33l15.8-27.38a.32.32 0 01.57 0l15.8 27.38a.33.33 0 01-.28.48H2.8a.32.32 0 01-.28-.16zm35.1-1.51a1.66 1.66 0 01-.82 1.07 2.41 2.41 0 00-.3-.94L20.7 3.98a2.41 2.41 0 00-.75-.79 1.82 1.82 0 011.11-.2 1.84 1.84 0 011.24.94L37.34 30a1.83 1.83 0 01.28 1.24z" }), (0, jsx_runtime_1.jsx)("path", { d: "M18.59 25.12h.03a1.68 1.68 0 001.67-1.67v-9.23a1.69 1.69 0 00-3.38 0v9.23a1.68 1.68 0 001.68 1.67z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "18.6", cy: "27.87", r: "1.84" })] })));
}
exports.default = LineErrorState;
