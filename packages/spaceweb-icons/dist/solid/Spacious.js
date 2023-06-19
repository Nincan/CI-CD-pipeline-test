"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSpacious(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSpacious" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.85 10.67a.55.55 0 00-.41-.17h-.86v-7h.84l.03-.01a.56.56 0 00.4-.16.56.56 0 00-.02-.78l-1.57-1.51a.62.62 0 00-.33-.15.6.6 0 00-.13 0 .47.47 0 00-.26.12l-.05.03-1.56 1.5a.55.55 0 00.4.96h.85v7h-.84l-.03.01a.56.56 0 00-.4.16.56.56 0 00.02.78l1.57 1.51a.62.62 0 00.34.15.6.6 0 00.12 0 .47.47 0 00.27-.12l.04-.03 1.56-1.5a.55.55 0 00.02-.79z" }), (0, jsx_runtime_1.jsx)("rect", { width: "9.02", height: "5.2", y: ".89", rx: ".5" }), (0, jsx_runtime_1.jsx)("rect", { width: "9.02", height: "5.2", y: "7.91", rx: ".5" })] })));
}
exports.default = SolidSpacious;
