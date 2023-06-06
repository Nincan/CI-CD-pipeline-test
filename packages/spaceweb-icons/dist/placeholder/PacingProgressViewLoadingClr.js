"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderPacingProgressViewLoadingClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 200 93", "data-icon-name": "PlaceholderPacingProgressViewLoadingClr" }, props, { children: (0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ fill: "none", fillRule: "evenodd", stroke: theme.spr.icon04 }, { children: [(0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ transform: "translate(1 1)" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.5 48v5M6 50.5h5M195.5 62v5m-2.5-2.5h5", "stroke-linecap": "square" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "2.5", cy: "32.5", r: "2.5" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "190.5", cy: "76.5", r: "2.5" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("path", { d: "M75 26h23.022M75 58h23.022M75 32h48M75 44h48m-48-6h48M63 90.008V14.992c0-1.1.897-1.992 2-1.992h52.993c.556 0 1.327.32 1.715.708l14.584 14.584c.391.391.708 1.164.708 1.716v60" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M118.5 13.727v14.31c0 .823.67 1.493 1.493 1.493h14.31c.65 0 .69-.096.219-.567l-15.455-15.455c-.475-.475-.567-.438-.567.219z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M75 64h48M75 76h48m-48-6h48", strokeDasharray: "4" }, void 0)] }), void 0) }), void 0));
}
exports.default = PlaceholderPacingProgressViewLoadingClr;
