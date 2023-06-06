"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Overview.svg instead.
 */
function LineView(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineView" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.75 6.266C12.784 5.014 10.192 2.1 7 2.1S1.217 5.014.25 6.266a1.198 1.198 0 0 0 0 1.467C1.216 8.986 3.807 11.9 7 11.9s5.784-2.914 6.75-4.167a1.202 1.202 0 0 0 0-1.467zm-1.019.728c-.696.897-3.054 3.648-5.73 3.648-.866 0-3.153-.355-5.733-3.637C1.965 6.108 4.327 3.356 7 3.356c2.65 0 5.027 2.744 5.731 3.638z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M6.914 4.814c-1.193 0-2.163.97-2.163 2.163 0 1.192.97 2.163 2.163 2.163a2.164 2.164 0 0 0 0-4.326zm.906 2.163c0 .5-.407.906-.906.906a.907.907 0 0 1 0-1.812c.5 0 .906.407.906.906z" }, void 0)] }), void 0));
}
exports.default = LineView;
