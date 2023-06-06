"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandStackExchange(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandStackExchange" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.326 6.103h11.272v2.321H1.326ZM1.326 3.104h11.272v2.321H1.326ZM10.835 0h-7.7a1.833 1.833 0 0 0-1.809 1.854v.602h11.272v-.602A1.806 1.806 0 0 0 10.835 0ZM1.326 9.087v.603a1.833 1.833 0 0 0 1.809 1.854h4.822V14l2.381-2.456h.527a1.833 1.833 0 0 0 1.809-1.854v-.603Z" }, void 0) }), void 0));
}
exports.default = BrandStackExchange;
