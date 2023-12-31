"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandForumsClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandForumsClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M2.825 14c.12-.63.406-1.194.258-1.6-.15-.414-.765-.637-1.113-1.004C.175 9.507-.465 7.276.342 4.786 1.187 2.178 3.062.602 5.76.116c3.248-.584 6.42 1.08 7.677 3.942 1.726 3.928-.661 8.49-4.928 9.268-1.844.336-3.729.45-5.683.674zm6.816-3.142c-.176-.512-.333-.892-.43-1.287-.037-.15.008-.39.112-.49 1.026-.989 1.346-2.165.849-3.488-.488-1.299-1.518-1.942-2.879-2.087-1.522-.163-3.124.943-3.483 2.41-.382 1.558.419 3.205 1.91 3.74 1.248.448 2.537.783 3.921 1.202z" }) })));
}
exports.default = BrandForumsClr;
