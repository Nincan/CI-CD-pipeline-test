"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDoubleTickMessage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDoubleTickMessage" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.4 0H1.6A1.54 1.54 0 00.08 1.54v12.25a.2.2 0 00.36.14l2.81-3.15h9.15a1.55 1.55 0 001.54-1.54v-7.7A1.55 1.55 0 0012.4 0zm-.66 4.2L8.47 7.47a.68.68 0 01-.15.1.73.73 0 01-.08.05.7.7 0 01-.52 0 .74.74 0 01-.08-.05.68.68 0 01-.15-.1L6.3 6.26l-1.2 1.2a.67.67 0 01-.13.1.71.71 0 01-.1.05.7.7 0 01-.52 0 .74.74 0 01-.07-.05.68.68 0 01-.16-.1L2.67 5.98A.7.7 0 113.66 5l.95.97L7.4 3.22a.7.7 0 111 .98L7.28 5.3l.7.7 2.76-2.77a.7.7 0 01.99.98z" }) })));
}
exports.default = SolidDoubleTickMessage;
