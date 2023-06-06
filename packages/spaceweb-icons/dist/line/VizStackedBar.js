"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineVizStackedBar(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 12 11", "data-icon-name": "LineVizStackedBar" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.5 3h6a1.5 1.5 0 100-3h-6a1.5 1.5 0 100 3zm6-2c.3 0 .5.2.5.5s-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2zm-6 0h2.6l-.1.5V2H1.6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5zm9 3h-9a1.5 1.5 0 100 3h9a1.5 1.5 0 100-3zm-9 2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5h-3zm9 0H5.9l.1-.5V5h4.5c.3 0 .5.2.5.5s-.2.5-.5.5zm-3 2h-6a1.5 1.5 0 100 3h6a1.5 1.5 0 100-3zm-6 2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5h-2zm6 0H4.9l.1-.5V9h2.5c.3 0 .5.2.5.5s-.2.5-.5.5z" }, void 0) }), void 0));
}
exports.default = LineVizStackedBar;
