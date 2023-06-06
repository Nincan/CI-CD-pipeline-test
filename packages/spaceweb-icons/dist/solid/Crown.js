"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCrown(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCrown" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.958 0H2.052a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h9.906a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5zM9.4 11.18H4.61a.5.5 0 010-1H9.4a.5.5 0 010 1zm.897-5.48h-.082l-.33 3.622a.089.089 0 01-.081.082H4.206a.089.089 0 01-.082-.082L3.794 5.7h-.082a.823.823 0 11.824-.823.917.917 0 01-.37.7l1.522 2.14c.041.041.165.041.165-.041l.946-3.252a.793.793 0 01-.617-.782.823.823 0 011.646 0 .803.803 0 01-.576.782l.946 3.252a.102.102 0 00.165.04l1.482-2.14a.917.917 0 01-.37-.699.823.823 0 11.822.823z" }, void 0) }), void 0));
}
exports.default = SolidCrown;
