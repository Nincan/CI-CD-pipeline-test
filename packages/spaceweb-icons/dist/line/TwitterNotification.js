"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineTwitterNotification(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineTwitterNotification" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.236 6.017A7.213 7.213 0 0 0 13.24 9.69l.71 1.2a.362.362 0 0 1-.314.546h-3.41a3.242 3.242 0 0 1-.913 1.76 3.275 3.275 0 0 1-5.336-1.057 3.226 3.226 0 0 1-.204-.703H.364a.362.362 0 0 1-.313-.546l.709-1.2a7.222 7.222 0 0 0 1.004-3.672V4.644A5.029 5.029 0 0 1 7-.15a5.03 5.03 0 0 1 5.236 4.794ZM2.855 4.644A3.944 3.944 0 0 1 7 .936a3.943 3.943 0 0 1 4.144 3.708v1.373A8.304 8.304 0 0 0 12.3 10.24l.065.109H1.635l.065-.11a8.295 8.295 0 0 0 1.155-4.222Zm2.032 6.79a2.33 2.33 0 0 0 .097.289A2.184 2.184 0 0 0 7 13.063a2.184 2.184 0 0 0 1.542-.636 2.165 2.165 0 0 0 .473-.704 2.069 2.069 0 0 0 .097-.288Z", fillRule: "evenodd" }) })));
}
exports.default = LineTwitterNotification;
