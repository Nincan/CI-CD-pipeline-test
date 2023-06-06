"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidStar(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidStar" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.98 5.4a.44.44 0 00-.36-.3l-4.3-.63L7.39.57a.44.44 0 00-.78 0l-1.93 3.9-4.3.62a.44.44 0 00-.25.75l3.12 3.04-.74 4.29a.44.44 0 00.64.46L7 11.6l3.85 2.03a.44.44 0 00.64-.46l-.74-4.3 3.12-3.03c.12-.12.16-.29.1-.45z" }, void 0) }), void 0));
}
exports.default = SolidStar;
