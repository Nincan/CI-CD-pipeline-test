"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineRename(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineRename" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.6 9.783a.6.6 0 00-.6-.6H1.214V4.818H7a.6.6 0 100-1.2H1.114a1.102 1.102 0 00-1.1 1.1v4.566a1.101 1.101 0 001.1 1.1H7a.6.6 0 00.6-.6zM12.886 3.616h-1.262a.6.6 0 000 1.2h1.163v4.368h-1.163a.6.6 0 000 1.2h1.262a1.1 1.1 0 001.1-1.1V4.716a1.101 1.101 0 00-1.1-1.1z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.624 11.711H9.98V2.29h1.644a.6.6 0 000-1.2H7a.6.6 0 100 1.2h1.78v9.421H7a.6.6 0 100 1.2h4.623a.6.6 0 000-1.2z" })] })));
}
exports.default = LineRename;
