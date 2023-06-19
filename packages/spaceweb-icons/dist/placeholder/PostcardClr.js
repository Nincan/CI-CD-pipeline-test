"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderPostcardClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 27 33", "data-icon-name": "PlaceholderPostcardClr" }, props, { children: [(0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ opacity: ".5" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M1 11h25v9H1z" }), (0, jsx_runtime_1.jsx)("path", { d: "M26.5 20.5H.5v-10h26v10zm-25-1h24v-8h-24v8z" })] })), (0, jsx_runtime_1.jsx)("path", { d: "M24.61.5H2.39C1.35.5.5 1.47.5 2.66V33h1V2.66c0-.63.41-1.16.89-1.16h22.22c.49 0 .89.52.89 1.16V33h1V2.66c0-1.19-.85-2.16-1.89-2.16z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4 25.5h18v1H4zm0 3h18v1H4zM4 4h9v1H4zm0 3.5h18v1H4z" })] })));
}
exports.default = PlaceholderPostcardClr;
