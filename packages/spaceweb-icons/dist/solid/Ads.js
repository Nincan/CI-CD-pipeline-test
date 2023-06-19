"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAds(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAds" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.5 0h-11A1.5 1.5 0 000 1.5v11A1.5 1.5 0 001.5 14h11a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0012.5 0zm-1.614 11.283H3.114a1 1 0 010-2h7.772a1 1 0 010 2z" }) })));
}
exports.default = SolidAds;
