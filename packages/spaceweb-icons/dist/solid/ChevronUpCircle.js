"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidChevronUpCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidChevronUpCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm3.004 9.273H3.995a.496.496 0 0 1-.403-.783l3.005-4.225a.496.496 0 0 1 .807 0l3.004 4.225a.496.496 0 0 1-.404.783Z" }) })));
}
exports.default = SolidChevronUpCircle;
