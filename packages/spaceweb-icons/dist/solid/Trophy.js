"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTrophy(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTrophy" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.42 2.25H2.8v2.43h-.15a1.22 1.22 0 01-1.22-1.22zM5.4 3.67a.25.25 0 01.2-.17l.82-.12.37-.75a.25.25 0 01.44 0l.37.75.82.12a.25.25 0 01.14.42l-.6.58.15.82a.25.25 0 01-.25.29.24.24 0 01-.11-.03L7 5.19l-.73.39a.25.25 0 01-.37-.26l.15-.82-.6-.58a.25.25 0 01-.06-.25zm5.82 1.01V2.26h1.36v1.22a1.22 1.22 0 01-1.21 1.22h-.15v-.02zM2.98 5.93a4.22 4.22 0 002.94 2.82 3.9 3.9 0 010 1.16 5.9 5.9 0 01-.32 1.29l-1.35.1a.66.66 0 00-.66.66v1.38a.66.66 0 00.66.66h5.5a.66.66 0 00.66-.66v-1.38a.66.66 0 00-.66-.65L8.4 11.2a6.68 6.68 0 01-.32-1.29 4.48 4.48 0 010-1.16 4.22 4.22 0 002.94-2.8h.34a2.46 2.46 0 002.46-2.47V1.64A.62.62 0 0013.2 1h-2V.4a.42.42 0 00-.4-.4H3.21a.42.42 0 00-.42.42V1H.8a.62.62 0 00-.62.62v1.84a2.46 2.46 0 002.46 2.47z" }, void 0) }), void 0));
}
exports.default = SolidTrophy;
