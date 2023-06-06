"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineSidePane(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineSidePane" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.9 0A2.1 2.1 0 0114 2.1v9.8a2.1 2.1 0 01-2.1 2.1H2.1A2.1 2.1 0 010 11.9V2.1A2.1 2.1 0 012.1 0h9.8zM5.6 12.6h6.3a.7.7 0 00.7-.7V2.1a.7.7 0 00-.7-.7H5.6zM4.2 1.4v11.2H2.1a.7.7 0 01-.7-.7V2.1a.7.7 0 01.7-.7z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = LineSidePane;
