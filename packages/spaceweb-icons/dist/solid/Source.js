"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSource(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSource" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M2.958 11.889l2.787-2.787a.6.6 0 10-.848-.848L2.111 11.04l-.418-.418-.463-.472a.734.734 0 00-1.248.517v2.62a.734.734 0 00.731.73h2.611a.728.728 0 00.508-1.247z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7.674 9.55a2.643 2.643 0 01-1.454-.02l-2.605 2.605a6.13 6.13 0 006.68.036zM1.83 3.705a6.13 6.13 0 00.035 6.68L4.47 7.78a2.643 2.643 0 01-.02-1.454zm10.317 6.606a6.13 6.13 0 00-.047-6.66L9.495 6.255a2.642 2.642 0 01.027 1.43zM6.315 4.478a2.642 2.642 0 011.43.027L10.349 1.9a6.13 6.13 0 00-6.66-.047z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M1.248 3.85l.88-.874 2.828 2.829a.6.6 0 00.85-.848L2.978 2.129l.417-.418.473-.463A.734.734 0 003.35 0H.73A.734.734 0 000 .73v2.612a.728.728 0 001.248.508zM13.27 0h-2.62a.734.734 0 00-.518 1.248l.473.463.417.418-2.78 2.781a.6.6 0 10.847.848l2.782-2.782.881.874A.728.728 0 0014 3.342V.73a.734.734 0 00-.73-.73zm-.518 10.132l-.463.473-.418.417-2.9-2.9a.6.6 0 10-.848.848l2.901 2.901-.874.881A.728.728 0 0010.658 14h2.611a.734.734 0 00.731-.73v-2.62a.734.734 0 00-1.248-.518z" }, void 0)] }), void 0));
}
exports.default = SolidSource;
