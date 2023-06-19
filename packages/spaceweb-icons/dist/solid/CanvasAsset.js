"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCanvasAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCanvasAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.125 0H.875A.875.875 0 000 .875v12.25c0 .483.392.875.875.875h12.25a.875.875 0 00.875-.875V.875A.875.875 0 0013.125 0zM10.5 10.5a.875.875 0 01-.875.875h-5.25A.875.875 0 013.5 10.5v-.875c0-.483.392-.875.875-.875h5.25c.483 0 .875.392.875.875v.875zm0-3.5a.875.875 0 01-.875.875h-5.25A.875.875 0 013.5 7V3.5c0-.483.392-.875.875-.875h5.25c.483 0 .875.392.875.875V7z" }) })));
}
exports.default = SolidCanvasAsset;
