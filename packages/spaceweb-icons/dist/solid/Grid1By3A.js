"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGrid1By3A(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid1By3A" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.407 2.583H.577a.5.5 0 00-.5.5v8.55a.5.5 0 00.5.5h12.83a.5.5 0 00.5-.5v-8.55a.5.5 0 00-.5-.5zm-4.609 5.2v3.35h-3.52v-3.35zm-7.722 0H4.28v3.35H1.076zm11.83 3.35H9.799v-3.35h3.109z" }) })));
}
exports.default = SolidGrid1By3A;
