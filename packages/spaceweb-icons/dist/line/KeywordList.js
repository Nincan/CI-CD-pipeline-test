"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineKeywordList(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineKeywordList" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.663 3.432H1.3a.6.6 0 010-1.2h5.363a.6.6 0 010 1.2zm6.237 0H9.307a.6.6 0 010-1.2H12.9a.6.6 0 010 1.2zM3.982 6.21H1.3a.6.6 0 010-1.199h2.682a.6.6 0 010 1.2zm4.864 0H6.164a.6.6 0 010-1.199h2.682a.6.6 0 010 1.2zm4.054 0h-1.796a.6.6 0 010-1.199H12.9a.6.6 0 010 1.2zM5.822 8.989H1.3a.6.6 0 010-1.2h4.522a.6.6 0 010 1.2zm7.078 0H7.804a.6.6 0 010-1.2H12.9a.6.6 0 010 1.2zm-8.918 2.778H1.3a.6.6 0 010-1.2h2.682a.6.6 0 010 1.2zm8.918 0H6.164a.6.6 0 010-1.2H12.9a.6.6 0 010 1.2z" }) })));
}
exports.default = LineKeywordList;
