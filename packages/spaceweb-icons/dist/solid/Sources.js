"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSources(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 18.6 20.5", "data-icon-name": "SolidSources" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M18.6 13.4v3.9c0 1.8-4.2 3.1-9.3 3.1S0 19.1 0 17.4v-3.9c2.2 1.4 6 2 9.3 2s7.1-.7 9.3-2.1zm0-7.1v3.9c0 1.8-4.2 3.2-9.3 3.2S0 12 0 10.3v-4c2.2 1.4 6 2 9.3 2s7.1-.6 9.3-2zM9.3 0c5.1 0 9.3 1.4 9.3 3.2s-4.2 3.2-9.3 3.2S0 4.9 0 3.2 4.2 0 9.3 0z" }) })));
}
exports.default = SolidSources;
