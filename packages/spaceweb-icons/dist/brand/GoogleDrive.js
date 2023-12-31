"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGoogleDrive(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGoogleDrive" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.824 9.815q-4.44 0-8.88-.004a.263.263 0 0 0-.264.166q-.905 1.646-1.818 3.287c-.028.052-.047.108-.078.18.073.005.125.01.176.01l8.674.003a.594.594 0 0 0 .576-.342c.343-.644.695-1.283 1.045-1.923L14 9.825c-.086-.005-.13-.01-.176-.01ZM6.434 4.415Q5.72 3.15 5.014 1.882l-.468-.83-.08.133-4.371 7.8a.628.628 0 0 0 .005.672c.569 1.028 1.128 2.062 1.691 3.094.031.057.069.11.11.177.031-.043.051-.067.066-.093Q4.21 8.782 6.457 4.73a.28.28 0 0 0-.023-.316ZM9.94 8.656a.283.283 0 0 0 .291.163c1.169-.005 2.338-.003 3.507-.003.073 0 .147-.007.245-.012-.038-.077-.062-.131-.091-.183L9.559.878a.6.6 0 0 0-.58-.335C8.095.55 7.211.545 6.326.545h-.91c.044.092.065.14.09.186Q7.726 4.693 9.94 8.656Z" }) })));
}
exports.default = BrandGoogleDrive;
