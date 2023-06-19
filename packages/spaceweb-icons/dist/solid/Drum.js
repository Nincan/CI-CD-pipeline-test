"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDrum(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDrum" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.97 2.64l2.65-1.32A.62.62 0 0013.9.4a.63.63 0 00-.9-.28l-4.27 2.1a14.6 14.6 0 00-3.5 0L.99.12A.64.64 0 00.07.4a.74.74 0 00.28.9l2.58 1.33C1.26 3.2 0 4.11 0 5.37v5.38c0 4.33 13.97 4.26 13.97 0V5.37c0-1.26-1.26-2.17-3-2.73zm-5.94.98l.42.21-.84.42a.8.8 0 00-.35.98.7.7 0 00.98.28l1.75-.84 1.81.9a.74.74 0 00.91-.27.74.74 0 00-.28-.91l-.84-.42.42-.2c2.17.2 3.56 1.04 3.56 1.6 0 .7-2.23 1.81-5.58 1.81s-5.6-1.11-5.6-1.81c0-.63 1.4-1.4 3.64-1.75zM1.4 10.75V7.39a8.2 8.2 0 002.1.84v3.91c-1.33-.41-2.1-.97-2.1-1.4zm3.49 1.67V8.44a14.05 14.05 0 004.2 0v3.98a14.04 14.04 0 01-4.2 0zm5.59-.35v-3.9a8.2 8.2 0 002.1-.85v3.36c0 .49-.77 1.05-2.1 1.4z" }) })));
}
exports.default = SolidDrum;
