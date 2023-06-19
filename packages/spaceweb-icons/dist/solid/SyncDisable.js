"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSyncDisable(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSyncDisable" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.615 4.396l1.026-1.019a4.365 4.365 0 01.85 4.992l1.085 1.085a5.819 5.819 0 00-.894-7.117l1.092-1.093a.368.368 0 00-.264-.623H9.358a.363.363 0 00-.366.367V4.14a.364.364 0 00.623.256zM6.067 1.904v-.117a.677.677 0 00-.939-.63 3.817 3.817 0 00-.571.293l1.085 1.077a.703.703 0 00.425-.623zm7.682 10.805L1.302.262A.73.73 0 00.27 1.296l2.22 2.22a5.819 5.819 0 00.895 7.118L2.292 11.72a.367.367 0 00.256.63h3.145a.363.363 0 00.366-.366V8.838a.363.363 0 00-.623-.256L4.425 9.6a4.366 4.366 0 01-.85-4.992l5.849 5.85a.705.705 0 00-.425.63v.11a.684.684 0 00.938.637 6.66 6.66 0 00.564-.293l2.214 2.214a.73.73 0 001.034 0 .748.748 0 000-1.048z" }) })));
}
exports.default = SolidSyncDisable;
