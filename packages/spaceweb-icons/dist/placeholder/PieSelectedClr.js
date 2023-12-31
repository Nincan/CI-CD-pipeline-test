"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderPieSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 34 34", "data-icon-name": "PlaceholderPieSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M24.7 23.73l-.34.35a10.1 10.1 0 01-7.47 3.28h-.01a10.18 10.18 0 01-7.83-3.68l-.33-.4-4.42 3.87.32.37a16.05 16.05 0 0012.25 5.7h.01c4.49 0 8.8-1.9 11.84-5.2l.34-.37-4.37-3.92z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#CBD756", d: "M28.69 5.21A15.96 15.96 0 0017.33.5h-.2l-.63.02V6.4l.82-.02c5.63 0 10.2 4.58 10.2 10.2a10.17 10.17 0 01-2.73 6.93l-.35.37 4.38 3.93.33-.37a16.03 16.03 0 004.24-10.85 15.96 15.96 0 00-4.7-11.37z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#4CD2E0", d: "M16.18.5A16 16 0 001.7 10.36h-.01l-.14.35v.01l-.19.47h.02a15.97 15.97 0 00-.97 5.45 16.08 16.08 0 003.8 10.38l.33.4 4.41-3.87-.31-.37a10.21 10.21 0 01-2.37-6.54c0-1.24.24-2.48.7-3.67l.04-.1a10.17 10.17 0 019.2-6.5l.49-.02V.49l-.5.01z" })] })));
}
exports.default = PlaceholderPieSelectedClr;
