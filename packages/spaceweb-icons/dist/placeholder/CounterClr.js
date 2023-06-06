"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderCounterClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 40 27", "data-icon-name": "PlaceholderCounterClr" }, props, { children: [(0, jsx_runtime_1.jsx)("text", (0, tslib_1.__assign)({ transform: "translate(0 10)", "font-family": "'OpenSans'", "font-size": "13" }, { children: "00,000" }), void 0), (0, jsx_runtime_1.jsx)("path", { opacity: ".5", d: "M35 13H5a2 2 0 00-2 2v10c0 1.1.9 2 2 2h30a2 2 0 002-2V15a2 2 0 00-2-2zm-17.1 9.97a.5.5 0 01-.45.28h-7.2a.5.5 0 01-.45-.28.51.51 0 01.06-.53l3.6-4.5a.51.51 0 01.78 0l3.6 4.5a.5.5 0 01.06.53zm11.94-4.41l-3.6 4.5a.5.5 0 01-.78 0l-3.6-4.5a.51.51 0 01-.06-.53.5.5 0 01.45-.28h7.2a.5.5 0 01.45.28.5.5 0 01-.06.53z" }, void 0)] }), void 0));
}
exports.default = PlaceholderCounterClr;
