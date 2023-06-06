"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSegmentManager(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSegmentManager" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.25 14V7.7H-.02A7.02 7.02 0 006.25 14zm2.22-6.88l.34.14.03-.23a1.24 1.24 0 011.2-.99h1.43a1.25 1.25 0 011.22 1.06l.02.16.18-.07.24-.08h.19a1.22 1.22 0 01.64.2A6.98 6.98 0 007.68 0v7.24a1.22 1.22 0 01.52-.13zM-.02 6.3h6.27V0A7.03 7.03 0 00-.02 6.3z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.25 10.97a2.56 2.56 0 00.03-.33 2.43 2.43 0 00-.03-.33l.71-.55a.17.17 0 00.04-.22l-.67-1.16a.17.17 0 00-.2-.07l-.84.33a2.57 2.57 0 00-.57-.33l-.12-.89a.17.17 0 00-.17-.14h-1.34a.17.17 0 00-.17.14l-.13.89a2.47 2.47 0 00-.56.33l-.84-.34a.17.17 0 00-.2.08L7.5 9.54a.17.17 0 00.04.21l.71.56a2.56 2.56 0 00-.02.33 2.43 2.43 0 00.02.33l-.7.55a.17.17 0 00-.05.22l.67 1.16a.17.17 0 00.21.07l.84-.33a2.57 2.57 0 00.56.33l.13.89a.17.17 0 00.17.14h1.34a.17.17 0 00.17-.14l.12-.89a2.47 2.47 0 00.57-.33l.83.34a.17.17 0 00.21-.07l.67-1.17a.17.17 0 00-.04-.21zm-2.5.63a.96.96 0 11.97-.96.96.96 0 01-.96.96z" }, void 0)] }), void 0));
}
exports.default = SolidSegmentManager;
