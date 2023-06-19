"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Feed.svg instead.
 */
function LineFeed(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineFeed" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 12.51V4.99H1v7.527c0 .27.219.488.489.488h11.015A.496.496 0 0 0 13 12.51zm.23 1.49H.77a.77.77 0 0 1-.77-.77V.77A.77.77 0 0 1 .77 0h12.46a.77.77 0 0 1 .77.77v12.46a.77.77 0 0 1-.77.77z" }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.012 9.589H2.295a.138.138 0 0 1-.139-.139v-3c0-.077.062-.139.139-.139h2.717c.077 0 .139.062.139.139v3a.138.138 0 0 1-.139.139zm6.312-2.181H7.136a.54.54 0 1 1 0-1.08h4.188a.54.54 0 1 1 0 1.08zm0 2.142H7.136a.54.54 0 1 1 0-1.08h4.188a.54.54 0 0 1 0 1.08zm0 2.134H2.696a.54.54 0 0 1 0-1.08h8.628a.54.54 0 0 1 0 1.08z" })] })));
}
exports.default = LineFeed;
