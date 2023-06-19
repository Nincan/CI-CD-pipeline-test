"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidVideo(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidVideo" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.89 5.835v-2.72a.781.781 0 00-.78-.78H.78a.781.781 0 00-.78.78v7.78a.781.781 0 00.78.78h9.33a.781.781 0 00.78-.78v-2.73l1.78 1.78a.78.78 0 001.33-.55v-4.8a.78.78 0 00-1.33-.55z" }) })));
}
exports.default = SolidVideo;
