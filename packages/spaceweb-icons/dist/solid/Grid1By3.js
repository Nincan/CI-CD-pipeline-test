"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGrid1By3(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid1By3" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.405 2.58H.575a.5.5 0 00-.5.5v8.552a.5.5 0 00.5.5H13.406a.5.5 0 00.5-.5V3.079a.5.5 0 00-.5-.5zm-.5 1v3.204H1.076V3.58zM8.798 7.783v3.348h-3.52V7.784zm-7.722 0h3.202v3.348H1.076zm8.722 3.348V7.784h3.107v3.348z" }) })));
}
exports.default = SolidGrid1By3;
