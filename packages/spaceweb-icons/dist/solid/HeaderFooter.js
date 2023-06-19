"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidHeaderFooter(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidHeaderFooter" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.258.767H.742a.7.7 0 00-.7.7V12.04a.7.7 0 00.7.7h12.516a.7.7 0 00.7-.7V1.468a.7.7 0 00-.7-.7zM11.61 10.931h-9.23a.6.6 0 010-1.199h9.23a.6.6 0 110 1.2zm.607-6.952a.5.5 0 01-.5.5H2.282a.5.5 0 01-.5-.5v-1.29a.5.5 0 01.5-.5h9.436a.5.5 0 01.5.5z" }) })));
}
exports.default = SolidHeaderFooter;
