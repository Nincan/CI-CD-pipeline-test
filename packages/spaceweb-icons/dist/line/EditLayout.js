"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineEditLayout(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineEditLayout" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.803 0H1.197C.536 0 0 .536 0 1.197v11.606C0 13.464.536 14 1.197 14h11.606c.661 0 1.197-.536 1.197-1.197V1.197C14 .536 13.464 0 12.803 0zM12.8 1.2v3.13H1.199L1.197 1.2H12.8zM1.198 5.53h3.335v7.272l-3.333.001-.002-7.274zm4.535 7.272V5.529H12.8l.002 7.27-7.07.003z" }, void 0) }), void 0));
}
exports.default = LineEditLayout;
