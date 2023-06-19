"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGift(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGift" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.54 2.55a3.04 3.04 0 001.48.2c.55 0 1.03-.03 1.05-.03a.34.34 0 00.26-.17.31.31 0 00.01-.3A6.66 6.66 0 004.85.17 1.28 1.28 0 004.2 0a1.36 1.36 0 00-.66 2.55zm4.39.17c.02 0 .5.04 1.05.04a3.1 3.1 0 001.5-.21A1.36 1.36 0 009.8 0a1.31 1.31 0 00-.65.18 6.42 6.42 0 00-1.48 2.06.29.29 0 000 .3.36.36 0 00.26.18zM6.5 8.02H.96v5.49a.5.5 0 00.51.49H6.5v-.01zm1 5.97V14h5.02a.5.5 0 00.5-.5V8.03h-5.5zm-1-10.65H.96a.5.5 0 00-.51.5v2.92a.5.5 0 00.5.51H6.5zm6.53 0H7.51v3.93h5.52a.5.5 0 00.51-.5V3.84a.5.5 0 00-.5-.51z" }) })));
}
exports.default = SolidGift;
