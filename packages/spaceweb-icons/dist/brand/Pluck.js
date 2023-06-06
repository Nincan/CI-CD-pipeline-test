"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandPluck(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandPluck" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "6.955", cy: "5.556", r: "1.567" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "11.137", cy: "6.144", r: "1.567" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "2.855", cy: "6.165", r: "1.567" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.947 8.94c-.03-.292-.22-.478-.479-.579a1.24 1.24 0 00-.44-.072L7 8.292l-6.23.004c-.367.027-.686.312-.729.675-.03.26-.038.525-.041.788-.003.243.238.244.238.244L7 10.007l6.794.004s.212-.054.206-.19c-.013-.294-.023-.589-.053-.88z" }, void 0)] }), void 0));
}
exports.default = BrandPluck;
