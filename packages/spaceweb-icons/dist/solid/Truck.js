"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTruck(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTruck" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.769 4.457h-1.59V3.185a1.275 1.275 0 00-1.272-1.272h-7.63A1.275 1.275 0 00.007 3.185v5.722a1.275 1.275 0 001.272 1.272 1.907 1.907 0 103.815 0h3.815a1.907 1.907 0 103.815 0h.635a.638.638 0 00.636-.636V7.426a1.28 1.28 0 00-.254-.763l-1.463-1.952a.645.645 0 00-.508-.254zm-8.584 6.358a.636.636 0 11.636-.636.638.638 0 01-.636.636zm8.584-5.405L13.015 7h-2.836V5.41zm-.954 5.405a.636.636 0 11.636-.636.638.638 0 01-.636.636z" }, void 0) }), void 0));
}
exports.default = SolidTruck;
