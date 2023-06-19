"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidHtmlAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidHtmlAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.02 4.91a.38.38 0 00-.53.01L2.73 6.74a.38.38 0 000 .53L4.5 9.02a.38.38 0 00.54-.53l-1.5-1.5 1.5-1.54a.38.38 0 000-.54zm4.49 0a.38.38 0 00-.54.54l1.5 1.5-1.5 1.54a.38.38 0 00.54.53l1.76-1.82a.38.38 0 000-.53zM7.96 3.18a.38.38 0 00-.47.27l-1.84 6.93a.38.38 0 00.74.19l1.83-6.93a.38.38 0 00-.26-.46zm1-3.17a1.33 1.33 0 01.92.37L13.1 3.4a1.52 1.52 0 01.46 1.1v8.02A1.43 1.43 0 0112.18 14H1.82a1.43 1.43 0 01-1.38-1.47V1.48A1.43 1.43 0 011.82 0z", fillRule: "evenodd" }) })));
}
exports.default = SolidHtmlAsset;
