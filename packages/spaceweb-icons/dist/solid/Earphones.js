"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidEarphones(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidEarphones" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.803.015H2.96V8.12a1.777 1.777 0 001.11 1.645v3.524a.7.7 0 001.4 0V9.765A1.777 1.777 0 006.583 8.12V1.793A1.778 1.778 0 004.803.015zM.2 1.6v.488a1.59 1.59 0 001.589 1.589h.315V.01H1.79A1.59 1.59 0 00.199 1.6zm7.218.193V8.12A1.777 1.777 0 008.53 9.765v3.524a.7.7 0 001.4 0V9.765a1.777 1.777 0 001.112-1.646V.015H9.197a1.778 1.778 0 00-1.779 1.778zM12.211.01h-.315v3.667h.315a1.59 1.59 0 001.59-1.589v-.489A1.59 1.59 0 0012.21.01z" }, void 0) }), void 0));
}
exports.default = SolidEarphones;
