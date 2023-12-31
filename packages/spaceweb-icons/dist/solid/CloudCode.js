"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCloudCode(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCloudCode" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.94 7.13v-.28A4.66 4.66 0 007.29 2.2h-.04a4.62 4.62 0 00-4.53 3.65A2.95 2.95 0 000 8.78v.09a2.93 2.93 0 002.93 2.93h8.8A2.27 2.27 0 0014 9.53V9.4a2.22 2.22 0 00-2.06-2.27zM5.78 8.27a.38.38 0 01.15.52.4.4 0 01-.34.21.36.36 0 01-.19-.05l-1.8-.99a.4.4 0 01-.2-.34.36.36 0 01.2-.34l1.8-.98a.39.39 0 01.38.68l-1.17.64zM8.1 5.8L6.84 9.7a.39.39 0 01-.38.26.24.24 0 01-.11-.02.38.38 0 01-.25-.5l1.27-3.89a.38.38 0 01.49-.24.4.4 0 01.24.49zm2.48 2.15l-1.8.99A.32.32 0 018.6 9a.4.4 0 01-.34-.2.4.4 0 01.15-.53l1.17-.65-1.17-.64a.39.39 0 11.38-.68l1.79.98a.4.4 0 01.2.34.36.36 0 01-.2.34z" }) })));
}
exports.default = SolidCloudCode;
