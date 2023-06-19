"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandLinkedinCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandLinkedinCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#1075B1", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fill: "#FFF" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.612 5.782h1.5v4.514h-1.5zm.761-2.177c-.514 0-.85.338-.85.78 0 .434.326.781.83.781h.01c.523 0 .849-.347.849-.78-.01-.443-.326-.78-.839-.78zm4.424 2.071c-.8 0-1.154.44-1.353.747v.014h-.009l.01-.014v-.641H5.942c.02.423 0 4.514 0 4.514h1.501v-2.52c0-.135.01-.27.05-.366.108-.27.355-.55.77-.55.543 0 .76.415.76 1.021v2.415h1.5V7.708c0-1.387-.74-2.032-1.727-2.032z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.444 6.437v-.014l-.009.014z" })] }))] })));
}
exports.default = BrandLinkedinCircleClr;
