"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAgreement(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAgreement" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.711 4.44a.7.7 0 00-.99 0L6.02 6.143l-.496-.496a.7.7 0 00-.99.99l.99.991a.7.7 0 00.991 0L8.711 5.43a.7.7 0 000-.99z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.03.71c-.014 0-.028.004-.043.004H3.56a1.955 1.955 0 00-1.952 1.952V9.48H.74a.7.7 0 00-.7.7v1.16a1.953 1.953 0 001.95 1.95h7.54a1.946 1.946 0 001.93-1.75.66.66 0 00.02-.1V5.125l1.806-.015a.7.7 0 00.694-.7V2.67A1.958 1.958 0 0012.03.71zM3.007 2.666a.552.552 0 01.552-.552h6.61a1.942 1.942 0 00-.089.556v8.67a.55.55 0 11-1.1 0v-1.16a.7.7 0 00-.7-.7H3.007z" })] })));
}
exports.default = SolidAgreement;
