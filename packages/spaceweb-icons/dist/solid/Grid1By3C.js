"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidGrid1By3C(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid1By3C" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.407 2.583H.577a.5.5 0 00-.5.5v8.55a.5.5 0 00.5.5h12.83a.5.5 0 00.5-.5v-8.55a.5.5 0 00-.5-.5zm-.5 1v3.2H1.077v-3.2zm-11.83 4.2h3.2v3.35h-3.2zm8.72 3.35v-3.35h3.11v3.35z" }, void 0) }), void 0));
}
exports.default = SolidGrid1By3C;
