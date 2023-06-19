"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMicrophone(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMicrophone" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.732 8.383a2.087 2.087 0 002.09-2.096l.006-4.191a2.096 2.096 0 10-4.191 0v4.191a2.093 2.093 0 002.095 2.096z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.029 5.693a.594.594 0 00-.594.594v.001A3.625 3.625 0 016.732 9.85 3.625 3.625 0 013.03 6.288a.594.594 0 00-1.188 0 4.879 4.879 0 004.192 4.694v2.291a.699.699 0 001.397 0v-2.291a4.868 4.868 0 004.191-4.695.594.594 0 00-.593-.594z" })] })));
}
exports.default = SolidMicrophone;
