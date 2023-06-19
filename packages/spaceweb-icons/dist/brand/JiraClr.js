"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandJiraClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandJiraClr" }, props, { children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsxs)("linearGradient", tslib_1.__assign({ id: "jira_clr__a", x1: "10.42", x2: "7.63", y1: "12.63", y2: "9.67", gradientTransform: "matrix(1 0 0 -1 0 16)", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: ".18", stopColor: "#0052cc" }), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#2684ff" })] })), (0, jsx_runtime_1.jsx)("linearGradient", { href: "#jira_clr__a", id: "jira_clr__b", x1: "7.27", x2: "4.05", y1: "9.35", y2: "6.12" })] }), (0, jsx_runtime_1.jsx)("path", { fill: "#2684ff", d: "M13.41.2H6.67A3 3 0 009.7 3.16h1.25V4.3A3 3 0 0014 7.27V.77a.57.57 0 00-.59-.57z" }), (0, jsx_runtime_1.jsx)("path", { fill: "url(#jira_clr__a)", d: "M10.08 3.46H3.33A3 3 0 006.38 6.4h1.24v1.2a3 3 0 003.05 2.95V4.03a.58.58 0 00-.59-.57z" }), (0, jsx_runtime_1.jsx)("path", { fill: "url(#jira_clr__b)", d: "M6.75 6.73H0A3 3 0 003.04 9.7H4.3v1.15a3 3 0 003.04 2.96V7.3a.58.58 0 00-.58-.57z" })] })));
}
exports.default = BrandJiraClr;
