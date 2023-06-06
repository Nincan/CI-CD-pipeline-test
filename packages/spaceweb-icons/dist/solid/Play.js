"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidPlay(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidPlay" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.437 5.698L3.067.288A1.503 1.503 0 00.811 1.59v10.82a1.503 1.503 0 002.254 1.301l9.37-5.41a1.503 1.503 0 000-2.603z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidPlay;
