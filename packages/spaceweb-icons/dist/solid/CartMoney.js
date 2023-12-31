"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCartMoney(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCartMoney" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3 8.6a1.4 1.4 0 0 0 1.22 2.06h7.65a.7.7 0 0 0 0-1.39H4.22l.76-1.39h1.26a2.57 2.57 0 0 1-1.15-1.21A1.43 1.43 0 0 1 5.2 5.3a1.39 1.39 0 0 1 .21-.25 2.16 2.16 0 0 1-.46-1.38 2.42 2.42 0 0 1 1.3-2.05H2.97l-.46-1a.69.69 0 0 0-.63-.4H.74a.7.7 0 1 0 0 1.4h.7l2.5 5.27ZM4.22 10.98ZM11.17 10.98Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.6 1.71a.7.7 0 0 0-.34-.09H9.21l.04.08a2.42 2.42 0 0 1 1.03 1.26 1.4 1.4 0 0 1-.17 1.29 1.66 1.66 0 0 1-.1.13 2.25 2.25 0 0 1 .51 1.5 2.32 2.32 0 0 1-1.23 2h.87a1.38 1.38 0 0 0 1.22-.71l2.49-4.52a.7.7 0 0 0-.27-.94Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.62 5.15c.83.2.95.48.95.73 0 .12-.06.52-.83.52-.47 0-.77-.14-.88-.43a.41.41 0 0 0-.38-.27h-.1a.4.4 0 0 0-.33.18.4.4 0 0 0-.04.37 1.56 1.56 0 0 0 1.14.89v.16a.59.59 0 0 0 1.18 0v-.16A1.3 1.3 0 0 0 9.5 5.88c0-1-.83-1.35-1.65-1.56-.79-.2-.95-.4-.95-.65 0-.33.33-.54.83-.54.4 0 .64.14.73.41a.4.4 0 0 0 .37.3h.1a.4.4 0 0 0 .33-.18.39.39 0 0 0 .05-.36 1.41 1.41 0 0 0-1-.9v-.16a.59.59 0 0 0-1.17 0v.16a1.37 1.37 0 0 0-1.18 1.28c0 .96.94 1.3 1.65 1.47Z" })] })));
}
exports.default = SolidCartMoney;
