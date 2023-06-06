"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidVideoAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidVideoAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.062 0H1.936a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h10.126a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5zM8.944 7.252a.44.44 0 01-.107.107L5.662 9.58a.438.438 0 01-.688-.358V4.778a.437.437 0 01.688-.358l3.175 2.222a.438.438 0 01.107.61z" }, void 0) }), void 0));
}
exports.default = SolidVideoAsset;
