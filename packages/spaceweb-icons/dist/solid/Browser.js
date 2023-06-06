"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidBrowser(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidBrowser" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.296.302H.704A.704.704 0 0 0 0 1.006v11.988a.704.704 0 0 0 .704.704h12.592a.704.704 0 0 0 .704-.704V1.006a.704.704 0 0 0-.704-.704Zm-5.71 1.324h4.3a.704.704 0 0 1 0 1.408h-4.3a.704.704 0 0 1 0-1.408Zm-3.389-.014a.714.714 0 1 1-.714.714.714.714 0 0 1 .714-.714Zm-2.075 0a.714.714 0 1 1-.714.714.714.714 0 0 1 .714-.714Zm10.47 10.678H1.408V4.415h11.184Z" }, void 0) }), void 0));
}
exports.default = SolidBrowser;
