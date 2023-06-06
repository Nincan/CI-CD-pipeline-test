"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidGridRow1x2(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidGridRow1x2" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.409 4.43H.575a.5.5 0 00-.5.5l.004.014v4.335a.5.5 0 00.5.5h12.83a.5.5 0 00.5-.5v-4.35a.5.5 0 00-.5-.5zm-12.33 1h5.41v3.349H1.08zm6.41 3.349v-3.35h5.42v3.35z" }, void 0) }), void 0));
}
exports.default = SolidGridRow1x2;
