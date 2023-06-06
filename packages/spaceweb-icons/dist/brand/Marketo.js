"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandMarketo(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandMarketo" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13 11.158V1.895L9.421 0v14L13 11.158zM3.211 10.105V3.053L1 2.737v7.895l2.211-.527zM7.737 11.053h.105V2.105l-2.947-.842v11.053l2.842-1.263z" }, void 0) }), void 0));
}
exports.default = BrandMarketo;
