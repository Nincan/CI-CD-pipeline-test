"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidYelpStar(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidYelpStar" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.884.844l1.4 2.835a.986.986 0 00.742.54l3.129.454a.986.986 0 01.546 1.682l-2.264 2.207a.986.986 0 00-.283.873l.534 3.116a.986.986 0 01-1.43 1.04l-2.8-1.472a.986.986 0 00-.917 0L3.743 13.59a.986.986 0 01-1.431-1.04l.534-3.115a.986.986 0 00-.283-.873L.299 6.355a.986.986 0 01.546-1.682l3.13-.455a.986.986 0 00.742-.539L6.116.844a.986.986 0 011.768 0z" }) })));
}
exports.default = SolidYelpStar;
