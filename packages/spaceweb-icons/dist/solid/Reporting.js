"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidReporting(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidReporting" }, props, { children: (0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.31 13.75H.748a.195.195 0 0 1-.195-.195V7.558c0-.108.088-.195.195-.195h2.564c.108 0 .195.087.195.195v5.997a.195.195 0 0 1-.195.195zm4.97 0H5.72a.197.197 0 0 1-.197-.197V8.135c0-.108.088-.196.197-.196h2.56c.11 0 .197.088.197.196v5.418a.197.197 0 0 1-.197.197zm4.969 0h-2.557a.199.199 0 0 1-.199-.2V4.963c0-.11.09-.198.2-.198h2.556c.11 0 .199.089.199.198v8.589a.2.2 0 0 1-.199.199z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.275.25L10.75.295c-.128.002-.172.09-.095.194l.42.574-5.76 3.88-2.228-2.24-2.534 1.91v1.97L2.94 4.78l2.176 2.19 6.887-4.636.425.583c.076.104.172.089.212-.034L13.437.47c.04-.123-.033-.22-.162-.219z" }, void 0)] }, void 0) }), void 0));
}
exports.default = SolidReporting;
