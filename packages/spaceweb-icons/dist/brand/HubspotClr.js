"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandHubspotClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandHubspotClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#ff7a59", d: "M10.583 4.616V2.95a1.283 1.283 0 00.74-1.157v-.038A1.283 1.283 0 0010.04.472h-.038a1.283 1.283 0 00-1.283 1.283v.038a1.283 1.283 0 00.74 1.157v1.666a3.633 3.633 0 00-1.728.76l-4.57-3.559a1.433 1.433 0 00.052-.36A1.446 1.446 0 101.765 2.9h.001a1.43 1.43 0 00.712-.194l4.5 3.502a3.644 3.644 0 00.055 4.105l-1.368 1.369a1.21 1.21 0 10.79.79l1.354-1.354a3.65 3.65 0 102.774-6.502m-.56 5.48A1.873 1.873 0 119.92 6.35q.05-.002.101 0a1.873 1.873 0 01.002 3.743" }) })));
}
exports.default = BrandHubspotClr;
