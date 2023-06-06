"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidDocAssetClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidDocAssetClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M13.096 3.406L9.876.367A1.328 1.328 0 0 0 8.964 0H1.817c-.76 0-1.38.661-1.38 1.475v11.051c0 .813.62 1.474 1.38 1.474h10.366c.761 0 1.38-.661 1.38-1.474V4.512c0-.423-.17-.825-.467-1.106zM8.632 9.172h-1.07l-.493-1.98c-.06-.252-.077-.46-.077-.46h-.011s-.017.208-.077.46l-.494 1.98H5.33L4.375 5.25h1.01l.493 2.452c.05.242.05.412.05.412h.01s.006-.17.066-.412l.604-2.452h.773l.587 2.452c.06.242.066.412.066.412h.011s0-.17.05-.412l.537-2.452h.993l-.993 3.922z" }, void 0) }), void 0));
}
exports.default = SolidDocAssetClr;
