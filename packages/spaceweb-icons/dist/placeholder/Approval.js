"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderApproval(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 40 40", "data-icon-name": "PlaceholderApproval" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M34.016 7.523a19.95 19.95 0 00-12.925-6.497 16.992 16.992 0 00-12.217 3.6c-.013.012-.027.028-.04.039a16.63 16.63 0 00-2.336 1.541A16.545 16.545 0 00.37 19.207a20.275 20.275 0 0018.207 19.767 16.898 16.898 0 0012.233-3.607 16.008 16.008 0 005.043-4.283 16.604 16.604 0 003.445-10.29 19.599 19.599 0 00-5.281-13.27zM2.369 19.385A14.426 14.426 0 019.892 6.451a.842.842 0 00.097-.046 15.212 15.212 0 018.665-1.736 17.72 17.72 0 0111.488 5.759 17.987 17.987 0 013.888 6.655c.045.138.102.273.143.412a16.892 16.892 0 01.606 3.122l.004.03q.077.8.077 1.61a14.851 14.851 0 01-3.063 9.143 14.138 14.138 0 01-2.267 2.32 15.047 15.047 0 01-10.953 3.254A18.046 18.046 0 012.369 19.385z" }), (0, jsx_runtime_1.jsx)("path", { d: "M25.238 14.99l-8.688 8.981-3.973-3.658a1.482 1.482 0 00-2.113.008 1.527 1.527 0 00.193 2.129l5.087 4.684a1.624 1.624 0 00.293.193 1.73 1.73 0 00.154.101 1.582 1.582 0 00.512.137 1.486 1.486 0 00.314-.006c.034-.004.066-.016.1-.023a1.377 1.377 0 00.202-.05c.037-.013.072-.035.108-.052a1.308 1.308 0 00.169-.086c.037-.025.069-.057.104-.085a1.286 1.286 0 00.124-.101l9.652-9.978a1.517 1.517 0 00-.121-2.13 1.494 1.494 0 00-2.117-.063z" })] })));
}
exports.default = PlaceholderApproval;
