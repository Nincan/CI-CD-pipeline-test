"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/MuteUserReddit.svg instead.
 */
function LineMuteUserReddit(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineMuteUserReddit" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.744 1.083H5.267A5.184 5.184 0 00.088 6.262v.146a5.184 5.184 0 005.179 5.18h3.136v1.708a.51.51 0 00.348.483.492.492 0 00.162.027.511.511 0 00.407-.202l2.125-2.798a5.165 5.165 0 002.477-4.398v-.146a5.184 5.184 0 00-5.178-5.18zm3.954 5.325a3.959 3.959 0 01-3.954 3.954H5.267a3.959 3.959 0 01-3.955-3.954v-.146a3.959 3.959 0 013.955-3.954h3.477a3.959 3.959 0 013.954 3.954z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M9.707 3.414a.611.611 0 00-.866 0L7.005 5.25 5.17 3.414a.612.612 0 00-.865.866l1.835 1.836-1.835 1.836a.612.612 0 10.865.866l1.836-1.836 1.836 1.836a.612.612 0 00.866-.866L7.87 6.116 9.707 4.28a.612.612 0 000-.866z" }, void 0)] }), void 0));
}
exports.default = LineMuteUserReddit;
