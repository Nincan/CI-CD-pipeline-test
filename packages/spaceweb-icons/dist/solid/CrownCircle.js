"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCrownCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCrownCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 .011A6.989 6.989 0 1013.989 7 6.989 6.989 0 007 .011zm2.88 10.94a.177.177 0 01-.164.165H4.284a.177.177 0 01-.165-.165v-.494a.177.177 0 01.165-.165h5.432a.177.177 0 01.165.165zm.412-5.186h-.082l-.33 3.622a.089.089 0 01-.081.082H4.2a.089.089 0 01-.082-.082l-.33-3.622h-.081a.823.823 0 11.823-.823.917.917 0 01-.37.7l1.522 2.14c.041.041.165.041.165-.041l.946-3.252a.793.793 0 01-.617-.781.823.823 0 011.646 0 .803.803 0 01-.576.781l.947 3.252a.102.102 0 00.164.04l1.482-2.14a.917.917 0 01-.37-.699.823.823 0 11.823.823z" }, void 0) }), void 0));
}
exports.default = SolidCrownCircle;
