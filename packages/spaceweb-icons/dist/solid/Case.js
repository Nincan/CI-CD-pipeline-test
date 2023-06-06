"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCase(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCase" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.243.892h-8.58a1.77 1.77 0 0 0-1.77 1.772v8.672a1.77 1.77 0 0 0 1.772 1.772h8.672a1.77 1.77 0 0 0 1.772-1.772V2.664c-.093-1.026-.84-1.772-1.865-1.772zM7.14 10.31c-.84 0-1.679-.28-2.425-.932-.56-.653-.932-1.492-.932-2.331 0-.933.28-1.772.932-2.332 1.306-1.305 3.357-1.398 4.756-.093.187.187.187.56 0 .746-.186.187-.56.187-.746 0-.932-.84-2.331-.84-3.17.093-.467.373-.653.933-.653 1.492s.186 1.213.653 1.586c.839.746 2.144.839 2.984.093.28-.187.652-.187.839.093.186.28.186.56-.093.746-.56.56-1.4.84-2.145.84z" }, void 0) }), void 0));
}
exports.default = SolidCase;
