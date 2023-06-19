"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMentionCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMentionCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.03.15A6.97 6.97 0 1014 7.12 6.97 6.97 0 007.03.15zm1.7 8.92a.9.9 0 01-.95-.6 1.33 1.33 0 01-1.13.62A1.54 1.54 0 015.16 7.4 2.05 2.05 0 017.1 5.2a1 1 0 01.94.56l.02-.12a.45.45 0 01.45-.3c.21 0 .5.14.46.37l-.43 2.01a.87.87 0 00-.02.18.3.3 0 00.31.32c.48 0 .96-.7.96-1.65A2.35 2.35 0 007.2 4.24a2.79 2.79 0 00-2.86 2.94 2.74 2.74 0 002.94 2.85 2.96 2.96 0 001.8-.57.42.42 0 01.22-.07.41.41 0 01.42.4.39.39 0 01-.18.32 3.69 3.69 0 01-2.26.78 3.64 3.64 0 01-3.92-3.7 3.76 3.76 0 013.83-3.84 3.29 3.29 0 013.51 3.21 2.3 2.3 0 01-1.98 2.5z", fillRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.15 6.08a1.11 1.11 0 00-.98 1.23c0 .52.2.9.7.9.53 0 .93-.57.95-1.36 0-.46-.24-.77-.67-.77z", fillRule: "evenodd" })] })));
}
exports.default = SolidMentionCircle;
