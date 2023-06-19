"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSend(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSend" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", tslib_1.__assign({ id: "solidSend__a" }, { children: (0, jsx_runtime_1.jsx)("path", { fill: "none", d: "M-682-429H758v900H-682z" }) })) }), (0, jsx_runtime_1.jsx)("g", tslib_1.__assign({ clipPath: "url(#solidSend__a)" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.92 1.75C12.22 2.05.54 6.93.24 7.1s-.2.37.44.55l2.5.7a1.5 1.5 0 00.91-.04l2.62-1.2-1.26 1.76a.65.65 0 00-.14.39l-.13 2.67a.44.44 0 00.83.22l1.86-2.39q1.22.36 1.9.54a1.12 1.12 0 001.5-.74l2.63-7.4c.12-.44-.27-.7-.98-.41z" }) }))] })));
}
exports.default = SolidSend;
