"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderFunnelClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 38 26", "data-icon-name": "PlaceholderFunnelClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M0 0h38v5H0zm12 14h15v5H12z" }), (0, jsx_runtime_1.jsx)("path", { d: "M8 7h22v5H8zm8 14h6v5h-6z", opacity: ".5" })] })));
}
exports.default = PlaceholderFunnelClr;
