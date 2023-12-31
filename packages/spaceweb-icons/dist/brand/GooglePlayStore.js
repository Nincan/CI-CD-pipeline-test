"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGooglePlayStore(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGooglePlayStore" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.043 6.495l-2.544-1.468L8.407 7.05l1.912 1.849 2.724-1.572a.475.475 0 00.24-.416.475.475 0 00-.24-.415zm-3.006-1.688a.032.032 0 00-.007-.05L7.268 3.161 1.326.117C1.293.1 1.262.143 1.289.168l6.75 6.526a.032.032 0 00.046 0l1.952-1.887zM.724.666L.718 13.44c0 .141.17.213.27.115l6.73-6.505L.994.551a.16.16 0 00-.271.115zm7.338 6.717l-6.627 6.406a.058.058 0 00-.028.04c0 .001-.004 0-.004.003 0 .002.004.002.004.004.001.005-.002.01.002.014a.029.029 0 00.025.013c.002 0 .001.003.003.003.01 0 .016-.004.016-.004l5.826-3.209 2.608-1.506-1.825-1.764z" }) })));
}
exports.default = BrandGooglePlayStore;
