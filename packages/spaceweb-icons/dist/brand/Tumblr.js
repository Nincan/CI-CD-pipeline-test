"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandTumblr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 7.457 12", "data-icon-name": "BrandTumblr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.015 0v2.948h2.868v1.769H4.015l-.026 3.15c0 .719.037 1.178.11 1.382a.929.929 0 00.414.487c.267.164.572.246.914.246.61 0 1.427-.143 2.03-.549v1.769c-.513.25-1.192.547-1.608.647-.417.1-.868.151-1.353.151a4.561 4.561 0 01-1.461-.215 3.118 3.118 0 01-1.082-.61c-.3-.265-.508-.548-.622-.846-.116-.297-.173-.728-.173-1.295V4.691L0 4.717v-1.77c.474-.158.706-.393 1.043-.686.336-.296.606-.65.812-1.065.203-.412.363-.557.44-1.196h1.72z" }) })));
}
exports.default = BrandTumblr;
