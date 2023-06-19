"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidIgnore(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidIgnore" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.498 2.498H4.502a4.502 4.502 0 000 9.004h4.996a4.502 4.502 0 100-9.004zm-3.165 6.62A3.746 3.746 0 011.478 7a3.746 3.746 0 016.974 0 3.746 3.746 0 01-2.119 2.118z" }) })));
}
exports.default = SolidIgnore;
