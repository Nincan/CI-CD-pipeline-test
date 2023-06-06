"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandWeb(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandWeb" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.983 6.212a2.28 2.28 0 0 0-.89-2.295 2.193 2.193 0 0 0-2.666.057v3.017H9.82c.077 0 .205.07.105.175l-2.252 3.04c-.047.065-.087.065-.133 0L5.287 7.166c-.07-.09-.065-.18.006-.176h1.74V2.728c0-.031-.01-.14-.019-.266a3.444 3.444 0 0 0-3.418.024 3.396 3.396 0 0 0-1.513 3.71A2.847 2.847 0 0 0 0 8.936a3.12 3.12 0 0 0 2.93 3.045h8.465A2.853 2.853 0 0 0 14 8.935a2.785 2.785 0 0 0-2.017-2.724Z" }, void 0) }), void 0));
}
exports.default = BrandWeb;
