"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandNews(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandNews" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.474 8.708h6.918v1.107H3.476zm.036-4.22h3.667v3.217H3.51zm4.739 0h2.11v1.038h-2.11zm0 1.626h2.144v1.591H8.248z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.473 11.824V2.479h-4.45L9.719.783 8.934 0 7 1.936 5.064 0l-.783.783 1.696 1.696h-4.45v9.346h4.854v1.069H4.512V14h4.843v-1.107H7.487v-1.069zm-9.96-8.362h8.976v7.378H2.511V3.462z" })] })));
}
exports.default = BrandNews;
