"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSite(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSite" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.487 0H.513A.513.513 90 000 .513v12.974c0 .283.23.513.513.513h12.974a.513.513 90 00.513-.513V.513A.513.513 90 0013.487 0zM4.93 1.693h7.18v1.066H4.932V1.692zm-3.068-.5h2.07V3.26H1.864V1.194zM12.25 12.25H1.75V4.694h10.5v7.556z" }) })));
}
exports.default = BrandSite;
