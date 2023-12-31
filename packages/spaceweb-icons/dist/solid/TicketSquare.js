"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTicketSquare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTicketSquare" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.86.001H2.03A2.025 2.025 0 000 2.031v9.94a2.025 2.025 0 002.03 2.03h9.94a2.031 2.031 0 002.03-2.03v-9.94a2.12 2.12 0 00-2.14-2.03zm-1.651 4.283a1 1 0 01-.68.205H7.89v5.62a1.15 1.15 0 01-.247.802.836.836 0 01-.642.27.846.846 0 01-.65-.273 1.139 1.139 0 01-.25-.798V4.489H4.46a.98.98 0 01-.675-.206.71.71 0 01-.23-.548.706.706 0 01.24-.56.997.997 0 01.664-.201h5.07a.991.991 0 01.683.208.717.717 0 01.234.553.705.705 0 01-.237.55z" }) })));
}
exports.default = SolidTicketSquare;
