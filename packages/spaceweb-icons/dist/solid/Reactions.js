"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidReactions(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidReactions" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "none", d: "M-1.034 2.26h14.87v9.48h-14.87z" }), (0, jsx_runtime_1.jsx)("path", { d: "M0 6.457h1.975v4.391H0zM11.85 3.159a2.246 2.246 0 0 0-1.655.53 1.731 1.731 0 0 0-.491.562 1.584 1.584 0 0 0-.481-.581 2.297 2.297 0 0 0-1.684-.511c-.065.007-.117.028-.178.04l.087.17-.04.682-.461 1.524H8.02a1.844 1.844 0 0 1 1.333.571l.04.04.03.04a1.616 1.616 0 0 1 .33 1.333l-.63 2.877c-.015.046-.043.079-.06.122l.12.099a.766.766 0 0 0 1.022 0c.371-.31.952-.802 1.794-1.554 1.775-1.644 1.935-2.426 1.995-3.278A2.445 2.445 0 0 0 11.85 3.16Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M8.03 6.467H5.734L6.516 3.9l.02-.341-.1-.19a.718.718 0 0 0-.502-.221.83.83 0 0 0-.581.25L2.616 6.467v4.37h4.832a.839.839 0 0 0 .792-.6l.632-2.868a.718.718 0 0 0-.15-.601.935.935 0 0 0-.692-.301Z" })] })));
}
exports.default = SolidReactions;
