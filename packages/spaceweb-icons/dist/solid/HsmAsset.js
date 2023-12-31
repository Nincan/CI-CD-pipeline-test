"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidHsmAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidHsmAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.996 0H2.004A2.004 2.004 0 0 0 0 2.004v9.992A2.004 2.004 0 0 0 2.004 14h9.992A2.004 2.004 0 0 0 14 11.996V2.004A2.004 2.004 0 0 0 11.996 0ZM4.908 8.517h-.942V7.29H2.941v1.227h-.937V5.483h.937v1.062h1.025V5.483h.942Zm3.051-.449a1.006 1.006 0 0 1-.45.374 1.825 1.825 0 0 1-.732.127 1.504 1.504 0 0 1-1.072-.298 1.174 1.174 0 0 1-.337-.758l.892-.055a.687.687 0 0 0 .118.33.495.495 0 0 0 .414.185.457.457 0 0 0 .31-.094.283.283 0 0 0 .108-.219.278.278 0 0 0-.103-.21 1.193 1.193 0 0 0-.48-.177 2.037 2.037 0 0 1-.88-.368.74.74 0 0 1-.265-.586.798.798 0 0 1 .135-.442.901.901 0 0 1 .408-.327 1.897 1.897 0 0 1 .746-.12 1.528 1.528 0 0 1 .887.217.931.931 0 0 1 .364.688l-.884.052a.413.413 0 0 0-.46-.391.374.374 0 0 0-.246.07.214.214 0 0 0-.083.168.168.168 0 0 0 .068.13.76.76 0 0 0 .315.112 3.93 3.93 0 0 1 .88.268.929.929 0 0 1 .388.337.853.853 0 0 1 .12.449.963.963 0 0 1-.16.538Zm4.037.45h-.768V6.202l-.592 2.314h-.694L9.35 6.203v2.314h-.768V5.483h1.233l.475 1.846.472-1.846h1.233Z" }) })));
}
exports.default = SolidHsmAsset;
