"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSwitching(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSwitching" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.142 7.778H3.858a3.111 3.111 0 100 6.222h6.284a3.111 3.111 0 000-6.222zm-2.758 4.666H3.858a1.556 1.556 0 010-3.11h3.526a3.09 3.09 0 000 3.11zM3.858 6.201v.021h6.222a3.111 3.111 0 100-6.222H3.858a3.1 3.1 0 100 6.201zm-.02-4.625a1.535 1.535 0 11-1.536 1.535 1.531 1.531 0 011.535-1.535z" }) })));
}
exports.default = SolidSwitching;
