"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidRemoveContent(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidRemoveContent" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.06 7.184a3.85 3.85 0 01.682.069V1.12A1.022 1.022 0 0010.695.104h-9.56A.972.972 0 00.732.15a1.038 1.038 0 00-.632.97v10.154a1.081 1.081 0 001.046 1.092h6.288a3.825 3.825 0 01-.245-1.313 3.875 3.875 0 013.871-3.87zM2.606 2.731h6.307a.512.512 0 01.514.503.521.521 0 01-.514.514H2.607a.521.521 0 01-.514-.514.512.512 0 01.514-.503zm0 2.966h6.307a.509.509 0 110 1.017H2.607a.509.509 0 110-1.017zM5.761 9.68H2.607a.509.509 0 110-1.017h3.154a.509.509 0 110 1.017z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.059 8.212a2.842 2.842 0 102.842 2.842 2.845 2.845 0 00-2.842-2.842zm1.136 3.342H9.922a.5.5 0 010-1h2.273a.5.5 0 010 1z" })] })));
}
exports.default = SolidRemoveContent;
