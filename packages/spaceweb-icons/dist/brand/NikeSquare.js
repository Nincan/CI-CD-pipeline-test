"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandNikeSquare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandNikeSquare" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M0 0v14h14V0Zm10.978 5.633L6.153 7.698c-.365.156-.729.312-1.094.465a3.644 3.644 0 0 1-.729.222 1.875 1.875 0 0 1-.51.035.926.926 0 0 1-.518-.19.77.77 0 0 1-.296-.527 1.327 1.327 0 0 1 .064-.55 2.613 2.613 0 0 1 .353-.704 6.628 6.628 0 0 1 .555-.688l.144-.158.025-.027.002.002-.01.02a2.227 2.227 0 0 0-.249.595 1.23 1.23 0 0 0-.035.378.687.687 0 0 0 .54.632 1.419 1.419 0 0 0 .428.022 3.495 3.495 0 0 0 .625-.13l2.446-.65 2.598-.691.49-.13a.032.032 0 0 1 .018 0Z", fillRule: "evenodd" }) })));
}
exports.default = BrandNikeSquare;
