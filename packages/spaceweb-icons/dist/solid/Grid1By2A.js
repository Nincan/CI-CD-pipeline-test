"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGrid1By2A(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid1By2A" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.909 6.926l-.002-.01v-4.19a.5.5 0 00-.5-.5H.577a.5.5 0 00-.5.5v8.55a.5.5 0 00.5.5h12.83a.5.5 0 00.5-.5v-4.34zm-1.002-.5h-3.11v-3.2h3.11zm-3.11 4.35v-3.35h3.11v3.35z" }) })));
}
exports.default = SolidGrid1By2A;
