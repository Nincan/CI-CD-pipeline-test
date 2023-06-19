"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandJiveClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandJiveClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.205 2.037V.005H6.214v1.77c.533.054 1.581.154 2.991.262zm0 .905c-1.51-.2-2.544-.378-2.991-.459v7.42s.043.606-.296 1.017c-.46.556-1.124.634-1.124.634l1.088 2.441s.626-.114 1.24-.41c.762-.365 1.29-.752 1.699-1.485.408-.734.384-1.553.384-1.553V2.942z", fill: "#018AE3" }) })));
}
exports.default = BrandJiveClr;
