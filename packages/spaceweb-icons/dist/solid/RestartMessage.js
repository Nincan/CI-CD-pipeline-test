"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidRestartMessage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidRestartMessage" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.4 0H1.6A1.54 1.54 0 00.08 1.54v12.25a.2.2 0 00.36.14l2.81-3.15h9.15a1.55 1.55 0 001.54-1.54v-7.7A1.55 1.55 0 0012.4 0zM9.9 5.69a2.91 2.91 0 01-5.53.96.53.53 0 01.24-.71.52.52 0 01.24-.06.53.53 0 01.47.3A1.86 1.86 0 007 7.25a1.84 1.84 0 00.78-.18A1.86 1.86 0 007 3.53a1.95 1.95 0 00-1.18.42l.39.38a.53.53 0 01-.37.91H4.6a.53.53 0 01-.53-.53V3.48a.54.54 0 01.16-.37.53.53 0 01.38-.16.55.55 0 01.37.15l.08.1A2.93 2.93 0 017 2.47a2.97 2.97 0 01.3.01 2.92 2.92 0 012.6 3.2z" }) })));
}
exports.default = SolidRestartMessage;
