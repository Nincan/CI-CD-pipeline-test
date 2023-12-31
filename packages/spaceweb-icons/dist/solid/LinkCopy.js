"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLinkCopy(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLinkCopy" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.02 0H4.41a.992.992 0 00-.99.99v1.507h7.048a.99.99 0 01.98.99v7.103h1.572A.984.984 0 0014 9.6V.99a.99.99 0 00-.98-.99z" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.6 3.41H.99A.992.992 0 000 4.4v8.61a.986.986 0 00.99.99H9.6a.984.984 0 00.98-.99V4.4a.99.99 0 00-.98-.99zm-4.513 8a1.637 1.637 0 01-2.313 0l-.193-.193a1.637 1.637 0 010-2.313l1.1-1.102.585.584-1.102 1.101a.811.811 0 000 1.146l.194.193a.811.811 0 001.145 0l1.101-1.1.584.583zm.932-3.968a.375.375 0 01.53.53L4.55 9.97a.375.375 0 11-.53-.529zm1.97 1.065l-1.1 1.101-.584-.583 1.101-1.102a.81.81 0 000-1.145l-.193-.193a.81.81 0 00-1.146 0l-1.101 1.1-.584-.583 1.102-1.101a1.637 1.637 0 012.312 0l.193.193a1.637 1.637 0 010 2.313z" })] })));
}
exports.default = SolidLinkCopy;
