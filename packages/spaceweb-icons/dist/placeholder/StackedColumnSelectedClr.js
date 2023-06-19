"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderStackedColumnSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 30 30", "data-icon-name": "PlaceholderStackedColumnSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M0 16h6v7H0zM8 6h6v10H8zm8 3h6v10h-6zm8-9h6v11h-6z", fill: "#CBD756" }), (0, jsx_runtime_1.jsx)("path", { d: "M0 24h6v6H0zm8-7h6v13H8zm8 3h6v10h-6zm8-8h6v18h-6z", fill: "#4CD2E0" })] })));
}
exports.default = PlaceholderStackedColumnSelectedClr;
