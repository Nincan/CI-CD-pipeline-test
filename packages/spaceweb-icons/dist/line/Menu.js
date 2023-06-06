"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineMenu(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineMenu" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.778 11.667h12.444a.778.778 0 000-1.556H.778a.778.778 0 000 1.556zm0-3.89h12.444a.778.778 0 000-1.555H.778a.778.778 0 000 1.556zM0 3.112a.78.78 0 00.778.778h12.444a.778.778 0 000-1.556H.778A.78.78 0 000 3.111z" }, void 0) }), void 0));
}
exports.default = LineMenu;
