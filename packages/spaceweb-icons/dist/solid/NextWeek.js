"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidNextWeek(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidNextWeek" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M1.8 12.42v-6.9h9.66v3.24a1.56 1.56 0 011.1.45l.28.28V2.76a1.38 1.38 0 00-1.38-1.38h-.69V.69a.69.69 0 00-1.38 0v.69H3.87V.69a.69.69 0 00-1.38 0v.69H1.8A1.37 1.37 0 00.43 2.75v9.67A1.38 1.38 0 001.8 13.8h5.54a1.5 1.5 0 01.34-1.38z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.91 12.14l.03-.05a.56.56 0 00.04-.22.54.54 0 00-.06-.25.57.57 0 00-.1-.15L9.26 9.92a.57.57 0 10-.8.8l1.15 1.15-1.15 1.16a.57.57 0 10.8.8l1.56-1.56a.4.4 0 00.06-.09z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.51 11.62a.57.57 0 00-.1-.15l-1.56-1.55a.57.57 0 10-.8.8l1.16 1.15-1.16 1.16a.57.57 0 10.8.8l1.56-1.56a.39.39 0 00.07-.09l.02-.04.03-.05a.56.56 0 00.05-.22.54.54 0 00-.07-.25z" }, void 0)] }), void 0));
}
exports.default = SolidNextWeek;
