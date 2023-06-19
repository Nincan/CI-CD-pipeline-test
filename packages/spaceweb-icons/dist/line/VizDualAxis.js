"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineVizDualAxis(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 13 10", "data-icon-name": "LineVizDualAxis" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.13 5.35a.5.5 0 00.63-.04l4.25-3.94c.2-.19.21-.5.03-.71a.51.51 0 00-.71-.03L8.38 4.3 5.43 2.22a.5.5 0 00-.65.06L2.74 4.44 1.35 3.05c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l1.41 1.41L.64 6.66a.5.5 0 00.02.71c.09.08.22.13.34.13.13 0 .26-.05.36-.16l1.4-1.47 2.68 2.68c.11.11.27.17.43.14.16-.03.3-.13.37-.27l.93-1.86L11.5 9.8c.09.07.2.1.3.1a.5.5 0 00.4-.2.5.5 0 00-.1-.7L7.3 5.4a.506.506 0 00-.41-.09.51.51 0 00-.34.27l-.89 1.78-2.21-2.22 1.76-1.86 2.92 2.07z" }) })));
}
exports.default = LineVizDualAxis;
