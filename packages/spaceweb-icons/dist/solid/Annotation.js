"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAnnotation(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidAnnotation" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.533.615H.467a.446.446 0 00-.469.478v9.624a.446.446 0 00.469.479h4.766l1.334 1.996c.183.234.183.183.469.193.152 0 .224 0 .397-.193l1.334-1.996h4.766a.446.446 0 00.469-.479V1.093a.446.446 0 00-.469-.478z" }, void 0) }), void 0));
}
exports.default = SolidAnnotation;
