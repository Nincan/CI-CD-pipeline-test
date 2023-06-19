"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSketchAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSketchAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.158 0H2.032a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h10.126a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5zM10.64 6.102l-2.982 3.944a.707.707 0 01-1.127 0L3.55 6.102a.707.707 0 01-.023-.82l.792-1.178a.707.707 0 01.587-.313h4.38a.705.705 0 01.586.313l.792 1.177a.706.706 0 01-.023.821z" }) })));
}
exports.default = SolidSketchAsset;
