"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMissedCall(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMissedCall" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.413 5.538a.598.598 0 00.596-.596v-.935l2.527 2.527a.594.594 0 00.84 0l3.373-3.374a.594.594 0 00-.84-.84l-2.95 2.95-2.116-2.116h.954a.596.596 0 100-1.191H3.413a.598.598 0 00-.596.596v2.383a.598.598 0 00.596.596zm3.463 1.744a10.538 10.538 0 00-6.08 1.467C.082 9.19 0 9.618 0 9.618a12.469 12.469 0 00.122 1.814c.12.53.781.606.781.606s1.71-.346 2.274-.448a1.07 1.07 0 00.762-.507s.3-1.172.38-1.396c.08-.226.507-.255.507-.255s3.917-.072 4.314 0c.396.073.632.936.634 1.396.002.698.936.846.936.846a21.802 21.802 0 002.362.274h.001c1.145.06.953-1.572.84-2.172a1.679 1.679 0 00-.568-.947 16.142 16.142 0 00-6.469-1.547z" }) })));
}
exports.default = SolidMissedCall;
