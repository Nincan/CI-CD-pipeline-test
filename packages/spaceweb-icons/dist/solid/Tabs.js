"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTabs(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTabs" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.727 1.273H1.273A1.276 1.276 0 000 2.545v8.91a1.276 1.276 0 001.273 1.272h11.454A1.276 1.276 0 0014 11.455v-8.91a1.276 1.276 0 00-1.273-1.272zm-.636 10.182H1.909a.638.638 0 01-.636-.637V3.182a.638.638 0 01.636-.637h5.727v1.91a.638.638 0 00.637.636h4.454v5.727a.638.638 0 01-.636.637z" }) })));
}
exports.default = SolidTabs;
