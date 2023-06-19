"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderDualAxisPreviewClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 668 304", "data-icon-name": "PlaceholderDualAxisPreviewClr" }, props, { children: (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fill: "none", fillRule: "evenodd" }, { children: [(0, jsx_runtime_1.jsx)("path", { stroke: theme.spr.icon04, d: "M54 156l122 53 215-97 123 23 101-40" }), (0, jsx_runtime_1.jsx)("path", { stroke: "#9E81EB", d: "M54 104l101 40 123-24 215 98 122-54" }), (0, jsx_runtime_1.jsx)("path", { stroke: "#DCDCE3", d: "M616 30v221l-564 1V30" }), (0, jsx_runtime_1.jsx)("text", tslib_1.__assign({ "font-family": "OpenSansRegular, Open Sans", "font-size": "12", "letter-spacing": "2", fill: "#4B4B55", transform: "translate(16 30)" }, { children: (0, jsx_runtime_1.jsx)("tspan", tslib_1.__assign({ x: "304", y: "255" }, { children: "X AXIS" })) })), (0, jsx_runtime_1.jsx)("text", tslib_1.__assign({ transform: "rotate(-90 31 119.5)", "font-family": "OpenSansRegular, Open Sans", "font-size": "12", "letter-spacing": "2", fill: "#4B4B55" }, { children: (0, jsx_runtime_1.jsx)("tspan", tslib_1.__assign({ x: "-15.5", y: "117.5" }, { children: "Y AXIS" })) })), (0, jsx_runtime_1.jsx)("text", tslib_1.__assign({ transform: "rotate(-90 651 119.5)", "font-family": "OpenSansRegular, Open Sans", "font-size": "12", "letter-spacing": "2", fill: "#4B4B55" }, { children: (0, jsx_runtime_1.jsx)("tspan", tslib_1.__assign({ x: "604.5", y: "117.5" }, { children: "Y AXIS" })) }))] })) })));
}
exports.default = PlaceholderDualAxisPreviewClr;
