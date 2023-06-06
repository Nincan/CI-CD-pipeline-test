"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineStackedBar(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineStackedBar" }, props, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", (0, tslib_1.__assign)({ id: "stackedBar__a" }, { children: (0, jsx_runtime_1.jsx)("path", { fill: "none", d: "M-716.734-418.366h1440v900h-1440z" }, void 0) }), void 0) }, void 0), (0, jsx_runtime_1.jsx)("g", (0, tslib_1.__assign)({ clipPath: "url(#stackedBar__a)" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.576 1.24H6.424l-.001 4.607h1.152zm4.608 3.456h-1.152v2.303h1.152zM2.968 5.848H1.816v3.456h1.151zm9.216 2.303h-1.152v4.61h1.152zM7.575 6.999H6.423l.001 5.761h1.152zm-4.608 3.457H1.815v2.304h1.153zm9.217-6.912a1.152 1.152 0 011.152 1.152v8.064a1.152 1.152 0 01-1.152 1.153h-1.152A1.152 1.152 0 019.88 12.76V4.696a1.152 1.152 0 011.152-1.152zM7.576.087A1.152 1.152 0 018.728 1.24v11.52a1.152 1.152 0 01-1.152 1.153H6.424a1.152 1.152 0 01-1.152-1.153V1.24A1.152 1.152 0 016.424.087zM2.968 4.696A1.152 1.152 0 014.12 5.848v6.912a1.152 1.152 0 01-1.152 1.153H1.816A1.152 1.152 0 01.664 12.76V5.848a1.152 1.152 0 011.152-1.152z" }, void 0) }), void 0)] }), void 0));
}
exports.default = LineStackedBar;
