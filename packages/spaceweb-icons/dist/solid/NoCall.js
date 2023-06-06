"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidNoCall(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidNoCall" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.857 9.406a1.265 1.265 0 00-1.065-.214s-1.235.733-1.49.854c-.255.123-.638-.213-.638-.213l-.347-.336-1.781 1.782A12.505 12.505 0 0010.47 13.8a1.844 1.844 0 001.396-.061 14.879 14.879 0 001.421-1.63 1.105 1.105 0 00-.147-1.166s-1.724-1.148-2.284-1.537zM13.778.364a.711.711 0 00-1.006 0L5.461 7.676c-.692-.688-1.307-1.314-1.417-1.473-.271-.395.254-1.32.638-1.708.585-.59-.075-1.5-.075-1.5A25.914 25.914 0 002.855.777h-.001C1.944-.24.735 1.296.327 1.896a2.011 2.011 0 00-.32 1.276 19.21 19.21 0 003.708 6.248L.483 12.653a.711.711 0 001.006 1.006l12.29-12.29a.711.711 0 000-1.005z" }, void 0) }), void 0));
}
exports.default = SolidNoCall;
