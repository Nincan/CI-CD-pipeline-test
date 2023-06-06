"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineVizCombination(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 11 11", "data-icon-name": "LineVizCombination" }, props, { children: (0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("path", { d: "M1 4.5l.3-.1 3.8-2.8L8.8 3c.3 0 .6 0 .7-.3 0-.3 0-.6-.3-.7L5.2.5l-.5.1L.9 3.4.3 3a.5.5 0 00-.7.3c0 .2 0 .5.3.6l1 .5.2.1zM1.5 6C.7 6 0 6.7 0 7.5v2a1.5 1.5 0 103 0v-2C3 6.7 2.3 6 1.5 6zM2 9.5c0 .3-.2.5-.5.5S1 9.8 1 9.5v-2c0-.3.2-.5.5-.5s.5.2.5.5v2z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M5.5 3C4.7 3 4 3.7 4 4.5v5a1.5 1.5 0 103 0v-5C7 3.7 6.3 3 5.5 3zM6 9.5c0 .3-.2.5-.5.5S5 9.8 5 9.5v-5c0-.3.2-.5.5-.5s.5.2.5.5v5zM9.5 5C8.7 5 8 5.7 8 6.5v3a1.5 1.5 0 103 0v-3c0-.8-.7-1.5-1.5-1.5zm.5 4.5c0 .3-.2.5-.5.5S9 9.8 9 9.5v-3c0-.3.2-.5.5-.5s.5.2.5.5v3z" }, void 0)] }, void 0) }), void 0));
}
exports.default = LineVizCombination;
