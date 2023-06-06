"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTemplateClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 20 16", "data-icon-name": "SolidTemplateClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#44D7B6", d: "M8.8 3H4.5c-.3 0-.5.2-.5.5v4.4c0 .3.2.5.5.5h4.3c.2 0 .4-.2.4-.5V3.5c0-.3-.2-.5-.4-.5zm6.7 0h-3.1c-.3 0-.5.2-.5.5v9c0 .3.2.5.5.5h3.1c.3 0 .5-.2.5-.5v-9c0-.3-.2-.5-.5-.5zm-6.8 7.8H4.5c-.3 0-.5.2-.5.5v1.2c0 .3.2.5.5.5h4.3c.2 0 .4-.2.4-.5v-1.2c0-.3-.2-.5-.4-.5zM18 0a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2C0 .9.9 0 2 0h16z" }, void 0) }), void 0));
}
exports.default = SolidTemplateClr;
