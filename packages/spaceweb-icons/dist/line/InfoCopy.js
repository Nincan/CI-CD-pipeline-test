"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/InfoCopy.svg instead.
 */
function LineInfoCopy(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineInfoCopy" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.825 14H1.012a1.001 1.001 0 01-1-1V3.187a1.001 1.001 0 011-1h9.813a1.001 1.001 0 011 1V13a1 1 0 01-1 1zm0-1v.5l.001-.5zM1.012 3.187V13h9.813V3.187z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M12.988 11.837V1.024H2.175a1.001 1.001 0 011-1h9.813a1.001 1.001 0 011 1v9.813a1 1 0 01-1 1zM5.918 11.27a.5.5 0 01-.5-.5V7.205a.5.5 0 011 0v3.567a.5.5 0 01-.5.5z" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "5.919", cy: "5.65", r: ".594" }, void 0)] }), void 0));
}
exports.default = LineInfoCopy;
