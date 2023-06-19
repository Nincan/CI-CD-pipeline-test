"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidHome(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidHome" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.477 12.575V8.771H8.52v3.804a.763.763 0 00.76.761h2.283a.763.763 0 00.761-.76V7.248h1.294a.377.377 0 00.25-.662L7.509.857a.767.767 0 00-1.02 0l-6.36 5.73a.379.379 0 00.25.662h1.294v5.326a.763.763 0 00.761.761h2.283a.763.763 0 00.76-.76z" }) })));
}
exports.default = SolidHome;
