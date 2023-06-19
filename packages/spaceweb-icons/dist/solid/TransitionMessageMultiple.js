"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTransitionMessageMultiple(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTransitionMessageMultiple" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.92 1.08A1.34 1.34 0 0010.62 0h-9.3A1.33 1.33 0 000 1.33V11.9a.18.18 0 00.3.12l.9-1V3.27a2.18 2.18 0 012.18-2.18z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.67 1.93h-9.3a1.33 1.33 0 00-1.32 1.33v10.56a.18.18 0 00.3.12l2.44-2.72h7.88A1.34 1.34 0 0014 9.9V3.26a1.34 1.34 0 00-1.33-1.33zm-1.43 5.24l-1.6 1.66a.58.58 0 01-1-.4V7.34H5.68a.58.58 0 010-1.17h2.94V5.12a.58.58 0 01.18-.43.58.58 0 01.83.02l1.59 1.65.03.04a.59.59 0 01-.02.77z" })] })));
}
exports.default = SolidTransitionMessageMultiple;
