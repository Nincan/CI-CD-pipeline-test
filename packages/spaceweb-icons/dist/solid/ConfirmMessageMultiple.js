"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidConfirmMessageMultiple(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidConfirmMessageMultiple" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.92 1.08A1.34 1.34 0 0010.62 0h-9.3A1.33 1.33 0 000 1.33V11.9a.18.18 0 00.3.12l.9-1V3.27a2.18 2.18 0 012.18-2.18z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.67 1.93h-9.3a1.33 1.33 0 00-1.32 1.33v10.56a.18.18 0 00.3.12l2.44-2.72h7.88A1.34 1.34 0 0014 9.9V3.26a1.34 1.34 0 00-1.33-1.33zm-1.94 3.58l-2.9 2.9a.6.6 0 01-.65.13.6.6 0 01-.16-.1l-.04-.03-1.3-1.3a.6.6 0 01.86-.85l.87.88 2.47-2.48a.6.6 0 01.85.85z" })] })));
}
exports.default = SolidConfirmMessageMultiple;
