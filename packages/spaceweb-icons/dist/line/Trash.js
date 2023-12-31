"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Delete.svg instead.
 */
function LineTrash(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineTrash" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.794 10.595v.004c-.143 1.018-.661 2.206-1.65 2.206H5.071c-.911 0-1.583-.353-1.904-2.075-.003-.014-.012-.025-.016-.039L2.096 2.565h9.777l-1.079 8.03zM13.418 1.4H7.617V.613a.582.582 0 10-1.165 0V1.4H.582a.582.582 0 100 1.165h.34l1.096 8.442c.01.076.036.145.071.208.417 1.845 1.39 2.754 2.983 2.754h4.071c1.37 0 2.43-1.163 2.755-2.973.008-.028.023-.052.027-.082l1.121-8.35h.372a.582.582 0 100-1.164" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.022 11.113c.321 0 .582-.26.582-.582V4.673a.582.582 0 10-1.164 0v5.858c0 .321.26.582.582.582zm-2.28 0c.017 0 .034 0 .052-.002a.583.583 0 00.529-.631l-.51-5.836a.584.584 0 00-1.16.102l.51 5.836a.58.58 0 00.579.531zm4.498-.003a.581.581 0 00.631-.529l.51-5.835a.582.582 0 00-.528-.631c-.33-.015-.602.21-.631.529l-.51 5.836a.58.58 0 00.528.63z" })] })));
}
exports.default = LineTrash;
