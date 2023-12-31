"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGlassdoorCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGlassdoorCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.95 2.05A7 7 0 1014 7a7 7 0 00-2.05-4.95zM3.88 6.33v-2.4a1.22 1.22 0 011.26-1.26h3.69a1.23 1.23 0 011.25 1.08c.01.12 0 .16-.14.16H5.3c-.12 0-.16.02-.16.15v4.76c0 .19 0 .19-.18.19h-.92c-.13 0-.16-.04-.16-.17v-2.5zm6.2 1.28v2.41a1.23 1.23 0 01-1.26 1.27H5.1a1.24 1.24 0 01-1.22-1.08c0-.12.01-.16.15-.16h4.62c.13 0 .17-.02.17-.16V5.14c0-.19 0-.19.18-.19h.89c.2 0 .2 0 .2.2z" }) })));
}
exports.default = BrandGlassdoorCircle;
