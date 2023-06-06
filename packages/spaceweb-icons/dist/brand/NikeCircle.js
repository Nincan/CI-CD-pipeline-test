"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandNikeCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandNikeCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.017.002a7 7 0 0 0 0 14 7 7 0 0 0 0-14Zm3.978 5.633L6.17 7.7c-.364.156-.728.312-1.094.465a3.644 3.644 0 0 1-.728.222 1.875 1.875 0 0 1-.51.034.926.926 0 0 1-.519-.19.77.77 0 0 1-.296-.527 1.327 1.327 0 0 1 .064-.55 2.613 2.613 0 0 1 .353-.703 6.63 6.63 0 0 1 .555-.688l.144-.159.025-.026.003.002-.01.019a2.227 2.227 0 0 0-.25.596 1.23 1.23 0 0 0-.035.377.687.687 0 0 0 .54.632 1.418 1.418 0 0 0 .428.022 3.496 3.496 0 0 0 .626-.13l2.445-.65 2.598-.69.49-.13a.032.032 0 0 1 .018 0Z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = BrandNikeCircle;
