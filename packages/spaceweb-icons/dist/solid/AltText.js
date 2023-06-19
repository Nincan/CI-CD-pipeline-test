"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAltText(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAltText" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.346 1.223l-.001-.001A3.997 3.997 0 0010.1 0H3.885A3.997 3.997 0 00.64 1.222a2.932 2.932 0 00-.606 2.287 1.061 1.061 0 001.24.84 1.06 1.06 0 00.833-1.221l.011-.002a.8.8 0 01.155-.554 2.19 2.19 0 011.61-.453h2.049v9.703h-.31a1.06 1.06 0 000 2.12h2.739a1.06 1.06 0 000-2.12h-.31V2.12H10.1a2.209 2.209 0 011.606.448.777.777 0 01.16.552 1.06 1.06 0 102.086.373 2.931 2.931 0 00-.607-2.27z" }) })));
}
exports.default = SolidAltText;
