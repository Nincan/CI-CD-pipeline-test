"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidQuickSearch(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidQuickSearch" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.774 12.066L11.42 9.712a3.824 3.824 0 10-1.391 1.391l2.354 2.354a.67.67 0 00.66.186 1.394 1.394 0 00.917-.917.67.67 0 00-.186-.66zm-6.14-1.884a2.436 2.436 0 112.865-2.865 2.438 2.438 0 01-2.866 2.865z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M8.11 12.619a4.827 4.827 0 01-1.028-9.544 5.055 5.055 0 011.027-.107 4.797 4.797 0 013.71 1.778V1.757A1.4 1.4 0 0010.46.322H1.323V1.63H.65a.653.653 0 00-.635.67.653.653 0 00.635.67h.673v1.815H.65a.67.67 0 000 1.34h.673V7.89H.65a.67.67 0 000 1.34h.673v1.799H.65a.671.671 0 000 1.34h.673v1.31h9.136a1.29 1.29 0 00.585-.145l-1.226-1.226a4.836 4.836 0 01-1.708.312z" }, void 0)] }), void 0));
}
exports.default = SolidQuickSearch;
