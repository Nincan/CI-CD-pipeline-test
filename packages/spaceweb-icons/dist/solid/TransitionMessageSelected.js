"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTransitionMessageSelected(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTransitionMessageSelected" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.4 0H1.6A1.54 1.54 0 00.08 1.54v12.25a.2.2 0 00.36.14l2.81-3.15h3.14a1.68 1.68 0 012.7-.42l.4.42h.1l2.46-2.46a1.67 1.67 0 011.9-.34V1.54A1.55 1.55 0 0012.38 0zm-1.87 5.86v.01L8.65 7.83a.69.69 0 01-1.19-.48V6.08h-3.5a.7.7 0 010-1.38h3.48V3.44a.68.68 0 01.22-.5.7.7 0 01.98.01l1.87 1.96a.8.8 0 01.04.05.7.7 0 01-.03.9z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.74 9.1l-3.22 3.22-1.15-1.17a.7.7 0 00-1 .97l1.65 1.67a.67.67 0 00.17.11.74.74 0 00.07.05.7.7 0 00.52 0 .73.73 0 00.07-.05.68.68 0 00.15-.1l3.72-3.71a.7.7 0 00-.98-.99z" })] })));
}
exports.default = SolidTransitionMessageSelected;
