"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderAlertClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 198 126", "data-icon-name": "PlaceholderAlertClr" }, props, { children: [(0, jsx_runtime_1.jsx)("ellipse", { opacity: ".2", fill: theme.spr.supportError, cx: "99.5", cy: "116.5", rx: "45", ry: "19.5" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: theme.spr.supportError, d: "M99.5 126C72.206 126 50 103.121 50 75c0-28.122 22.206-51 49.5-51S149 46.878 149 75c0 28.121-22.206 51-49.5 51zm0-97C74.963 29 55 49.636 55 75s19.963 46 44.5 46S144 100.364 144 75s-19.963-46-44.5-46zm3.25 46V54a3.5 3.5 0 00-7 0v21a3.5 3.5 0 107 0zm.5 15.5a3.5 3.5 0 10-7 0 3.5 3.5 0 107 0zM191 112V98a2 2 0 00-4 0v14a2 2 0 004 0zm5-9h-14a2 2 0 000 4h14a2 2 0 000-4zM45 31V17a2 2 0 10-4 0v14a2 2 0 104 0zm5-9H36a2 2 0 000 4h14a2 2 0 000-4zM19.944 11.556V1.444a1.444 1.444 0 00-2.889 0v10.112a1.444 1.444 0 002.889 0zm3.612-6.5H13.444a1.444 1.444 0 000 2.889h10.112a1.444 1.444 0 000-2.889z" }, void 0)] }), void 0));
}
exports.default = PlaceholderAlertClr;
