"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderSplineSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 37 29", "data-icon-name": "PlaceholderSplineSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#CBD756", d: "M32.06 21.55c-1.9-9.86-4.25-15.19-7.33-16.65l.03-.27a2.13 2.13 0 10-4.22.39c-1.74.77-3.47 2.23-5.17 3.66-2.59 2.2-5.03 4.27-7.1 3.58-1.76-.59-3.21-3.18-4.42-7.88A2.13 2.13 0 002.63.5a2.13 2.13 0 000 4.26c.1 0 .19-.01.28-.03 1.31 5.06 2.93 7.77 5.05 8.48 2.6.87 5.25-1.38 8.06-3.76 1.64-1.4 3.32-2.81 4.93-3.52a2.12 2.12 0 003.43-.1c2.68 1.35 4.88 6.52 6.67 15.76a2.13 2.13 0 00-1.55 2.04 2.13 2.13 0 102.56-2.08z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#4CD2E0", d: "M34.5 10.5a2.13 2.13 0 00-2.13 2.07c-6.17.67-9.54 4.5-12.54 7.93-2.06 2.36-3.92 4.47-6.4 5.42a2.13 2.13 0 00-1.97-1.33c-1.03 0-1.89.73-2.09 1.7-2.62-.73-4.62-3.84-5.7-5.94a2.12 2.12 0 001.1-1.85 2.13 2.13 0 10-2.14 2.13h.06c1.16 2.33 3.48 6.03 6.74 6.71a2.13 2.13 0 002.03 1.5c1.1 0 2-.83 2.1-1.9 2.84-1 4.89-3.34 7.02-5.78 3.03-3.46 6.16-7.02 12-7.6a2.13 2.13 0 001.92 1.2 2.13 2.13 0 000-4.26z" })] })));
}
exports.default = PlaceholderSplineSelectedClr;
