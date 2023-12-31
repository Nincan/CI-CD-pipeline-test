"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/NoAudio.svg instead.
 */
function LineMute(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineMute" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.6 12.75L1.25.4a.6.6 0 00-.85.85L2.86 3.7h-.8A1.48 1.48 0 00.6 5.18v3.64a1.48 1.48 0 001.47 1.48H4.3l3.63 3.37.16.13a1.47 1.47 0 00.75.2 1.5 1.5 0 001.02-.41 1.46 1.46 0 00.45-1.07v-1.36l2.43 2.44a.6.6 0 10.85-.85zm-4.47-.23a.28.28 0 01-.09.21.47.47 0 01-.29.08l-3.78-3.5-.15-.1a.9.9 0 00-.39-.1H2.06a.3.3 0 01-.29-.29V5.18a.3.3 0 01.3-.3h1.97l5.1 5.1zM12.23 7a4.61 4.61 0 01-.59 2.16l.87.86A5.86 5.86 0 0013.4 7a7.98 7.98 0 00-1.06-3.26.6.6 0 00-1.03.6A6.7 6.7 0 0112.23 7zM8.7 1.23a.3.3 0 01.43.25v5.17l1.18 1.18V1.48A1.47 1.47 0 008.1.2L5.3 2.8l.81.82z" }) })));
}
exports.default = LineMute;
