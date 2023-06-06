"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/LinkCopy.svg instead.
 */
function LineLinkCopy(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineLinkCopy" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.813 2.187H1a1.001 1.001 0 00-1 1V13a1.001 1.001 0 001 1h9.813a1.001 1.001 0 001-1V3.187a1.001 1.001 0 00-1-1zm0 11.313V13H1V3.187h9.813V13h.001z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M12.976.024H3.163a1.001 1.001 0 00-1 1h10.813v10.813a1.001 1.001 0 001-1V1.024a1.001 1.001 0 00-1-1zM6.226 9.113l-1.1 1.101a.811.811 0 01-1.147 0l-.193-.193a.811.811 0 010-1.146l1.101-1.1-.583-.584-1.101 1.1a1.637 1.637 0 000 2.314l.193.193a1.637 1.637 0 002.313 0L6.81 9.697z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M6.105 5.389l-1.1 1.101.583.584 1.101-1.102a.81.81 0 011.145 0l.194.194a.81.81 0 010 1.145L6.927 8.413l.583.583 1.102-1.101a1.637 1.637 0 000-2.313l-.194-.193a1.637 1.637 0 00-2.313 0z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M4.907 9.469a.375.375 0 01-.265-.64l1.999-2a.375.375 0 01.53.53l-1.999 2a.374.374 0 01-.265.11z" }, void 0)] }), void 0));
}
exports.default = LineLinkCopy;
