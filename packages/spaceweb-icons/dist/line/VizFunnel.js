"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineVizFunnel(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 13 12", "data-icon-name": "LineVizFunnel" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11 .5H2a1.5 1.5 0 100 3h9a1.5 1.5 0 100-3zm0 2H2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5s-.2.5-.5.5zm-2 2H4a1.5 1.5 0 100 3h5a1.5 1.5 0 100-3zm0 2H4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5zm-2 2H6a1.5 1.5 0 100 3h1a1.5 1.5 0 100-3zm0 2H6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5z" }, void 0) }), void 0));
}
exports.default = LineVizFunnel;
