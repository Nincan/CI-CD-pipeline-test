"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidOptimisedCampaign(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidOptimisedCampaign" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.926 3.698l-.433-.963-.963-.433a.344.344 0 010-.626l.963-.434.433-.963a.344.344 0 01.626 0l.434.963.963.433a.344.344 0 010 .626l-.963.434-.434.963a.344.344 0 01-.626 0zm2.23 3.254l-.221-.495a.344.344 0 00-.626 0l-.22.495-.502.22a.344.344 0 000 .626l.495.22.22.502a.344.344 0 00.626 0l.22-.495.502-.22a.344.344 0 000-.626z" }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M11.167 11.814q-.217-.734-.436-1.466l-2.136-7.47a.494.494 0 00-.949.271l.162.565q-1.46.954-2.917 1.91Q2.92 6.913.947 8.206a1.75 1.75 0 00-.762 1.828c.035.173.093.34.143.51a1.77 1.77 0 001.765 1.283h.334a2.595 2.595 0 005.092 0h.614v.009h.339v.007h1.66l.198.691a.495.495 0 00.61.34.49.49 0 00.349-.48.327.327 0 00.001-.14c-.03-.15-.08-.295-.123-.441m-6.195 1.154a1.639 1.639 0 01-1.554-1.14h3.11a1.64 1.64 0 01-1.556 1.14m3.69-1.85L6.895 5.375c.284-.186.809-.656 1.134-.89l1.887 6.6c-.395.007-.896.033-1.252.033" })] })));
}
exports.default = SolidOptimisedCampaign;
