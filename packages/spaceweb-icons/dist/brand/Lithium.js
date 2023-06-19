"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandLithium(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandLithium" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.428 5.327c0-1.429.004-2.858-.004-4.287-.001-.195.039-.275.252-.262.318.019.637.003.956.005a1.251 1.251 0 011.33 1.35c0 2.384.02 4.77-.009 7.154a2.039 2.039 0 002.162 2.162c.317-.024.637-.007.955-.003a1.365 1.365 0 011.412 1.372c.011.327 0 .655.003.982 0 .103-.003.188-.144.185a27.058 27.058 0 01-3.095-.061A4.494 4.494 0 011.43 9.512c-.004-1.395 0-2.79 0-4.185zm8.449 3.049c0-1.454.004-2.909-.004-4.363 0-.19.045-.256.242-.246.335.017.671-.001 1.007.007a1.261 1.261 0 011.298 1.311c.007.697.001 1.394.001 2.091 0 2.177-.004 4.354.006 6.531.001.231-.06.298-.285.282-.283-.02-.568-.004-.852-.005a1.274 1.274 0 01-1.412-1.426q-.002-1.6 0-3.201v-.981zM11.152 0a1.427 1.427 0 11-1.426 1.42A1.423 1.423 0 0111.152 0z" }) })));
}
exports.default = BrandLithium;
