"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandDomoClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandDomoClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.155 5.155a1.846 1.846 0 0 0-1.81 1.478V5.155L8.496 7 6.65 5.155v1.478a1.846 1.846 0 0 0-3.618 0 1.846 1.846 0 0 0-1.809-1.478H0v3.69h1.223a1.846 1.846 0 0 0 1.81-1.477 1.846 1.846 0 0 0 3.617 0v1.477h.611V6.638l1.234 1.234 1.229-1.234v2.207h.622V7.367a1.846 1.846 0 1 0 1.809-2.212ZM1.304 8.228H.612V5.771h.692a1.231 1.231 0 0 1 0 2.457Zm3.537.003A1.231 1.231 0 1 1 6.072 7a1.231 1.231 0 0 1-1.231 1.231Zm7.314 0A1.231 1.231 0 1 1 13.386 7a1.231 1.231 0 0 1-1.231 1.231Z", fill: "#a2caea" }, void 0) }), void 0));
}
exports.default = BrandDomoClr;
