"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandRadioCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandRadioCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40A3F5", cx: "7", cy: "7", r: "7" }, void 0), (0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ fill: "#FFF" }, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "5.575", cy: "7.694", r: ".838" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.422 4.83H6.657l3.13-1.05a.596.596 0 10-.2-.596L4.677 4.83h-1.1a.665.665 0 00-.665.665v4.4c0 .368.297.665.665.665h6.844a.665.665 0 00.665-.665v-4.4a.665.665 0 00-.665-.665zM5.575 9.297a1.603 1.603 0 110-3.207 1.603 1.603 0 010 3.207zm4.648-.44h-1.62a.409.409 0 110-.818h1.62v.818zm0-1.51h-1.62a.409.409 0 110-.817h1.62v.817z" }, void 0)] }), void 0)] }), void 0));
}
exports.default = BrandRadioCircleClr;
