"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandInstagramHome(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandInstagramHome" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.8 5.788 7.408.005a.607.607 0 0 0-.816 0L.2 5.788a.608.608 0 0 0-.2.451v7.305a.608.608 0 0 0 .609.608h4.26a.608.608 0 0 0 .61-.608v-2.435a1.522 1.522 0 0 1 3.043 0v2.435a.608.608 0 0 0 .608.608h4.261a.608.608 0 0 0 .609-.608V6.239a.608.608 0 0 0-.2-.45Zm-1.017 7.147H9.739v-1.826a2.74 2.74 0 1 0-5.478 0v1.826H1.217V6.509L7 1.278l5.783 5.231Z", fill: "#0a0a13" }, void 0) }), void 0));
}
exports.default = BrandInstagramHome;
