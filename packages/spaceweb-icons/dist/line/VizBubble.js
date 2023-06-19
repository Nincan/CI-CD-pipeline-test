"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineVizBubble(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 13 14", "data-icon-name": "LineVizBubble" }, props, { children: (0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.75 2a4.5 4.5 0 10.01 9.01A4.5 4.5 0 007.75 2zm-1 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1 6a3.5 3.5 0 01-3.5-3.5c0-.17.03-.34.05-.5a2.5 2.5 0 102.95-2.95c.16-.02.33-.05.5-.05a3.5 3.5 0 010 7zm-5.37-.25a1.88 1.88 0 100 3.77 1.88 1.88 0 000-3.77zm0 2.75a.88.88 0 110-1.76.88.88 0 010 1.76z" }), (0, jsx_runtime_1.jsx)("path", { d: "M2.75 4c.96 0 1.75-.79 1.75-1.75S3.71.5 2.75.5 1 1.29 1 2.25 1.79 4 2.75 4zm0-2.5c.41 0 .75.34.75.75S3.16 3 2.75 3 2 2.66 2 2.25s.34-.75.75-.75z" })] }) })));
}
exports.default = LineVizBubble;
