"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidClone(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidClone" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.756.11h-7.94a.7.7 0 100 1.4h7.692v7.653a.7.7 0 101.4 0V1.261A1.153 1.153 0 0012.756.11z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M9.946 2.518H1.572a1.5 1.5 0 00-1.5 1.5v8.374a1.5 1.5 0 001.5 1.5h8.374a1.5 1.5 0 001.5-1.5V4.018a1.5 1.5 0 00-1.5-1.5zm-1.71 6.344H6.458v1.776a.7.7 0 11-1.4 0V8.862H3.282a.7.7 0 110-1.4H5.06V5.684a.7.7 0 111.4 0v1.776h1.776a.7.7 0 010 1.4z" }, void 0)] }), void 0));
}
exports.default = SolidClone;
