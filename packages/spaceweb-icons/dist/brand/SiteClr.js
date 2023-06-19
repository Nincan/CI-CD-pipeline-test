"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSiteClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSiteClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M13.486 0H.514A.514.514 0 000 .514v12.973c0 .283.23.513.514.513h12.973c.283 0 .513-.23.513-.514V.514A.514.514 0 0013.486 0zM4.932 1.693h7.179v1.066H4.932V1.693zm-3.068-.5h2.068V3.26H1.864V1.193zM12.25 12.25H1.75V4.693h10.5v7.557z" }) })));
}
exports.default = BrandSiteClr;
