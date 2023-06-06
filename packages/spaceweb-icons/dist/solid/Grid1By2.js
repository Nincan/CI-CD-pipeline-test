"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidGrid1By2(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid1By2" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.909 6.926c0-.007-.004-.013-.004-.02V2.723a.5.5 0 00-.5-.5H.575a.5.5 0 00-.5.5v8.553a.5.5 0 00.5.5h12.83a.5.5 0 00.5-.5V6.945c0-.007.004-.013.004-.02zm-1.004-.5H9.799V3.223h3.106zM1.075 3.223H8.8v7.553H1.076zM9.8 10.776v-3.35h3.106v3.35z" }, void 0) }), void 0));
}
exports.default = SolidGrid1By2;
