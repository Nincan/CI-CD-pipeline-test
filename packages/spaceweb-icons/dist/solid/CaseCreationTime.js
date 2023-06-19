"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCaseCreationTime(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCaseCreationTime" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.629 1.98A5.99 5.99 0 001.64 7.915a3.53 3.53 0 011.109-.193 3.519 3.519 0 013.262 2.191 3.513 3.513 0 01-.57 3.63A5.99 5.99 0 107.629 1.979zm2.33 8.319v.001a.663.663 0 01-.938.001V10.3L7.162 8.443a.665.665 0 01-.2-.473V5.307a.666.666 0 011.331 0v2.39L9.96 9.361a.663.663 0 010 .938z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.248 9.026A2.713 2.713 0 002.75 8.57a2.675 2.675 0 00-1.033.203 2.807 2.807 0 00-.88.584 2.669 2.669 0 00-.584.88 2.696 2.696 0 003.013 3.674 2.746 2.746 0 001.38-.736 2.7 2.7 0 00.584-2.937 2.698 2.698 0 00-.982-1.21zm-.1 2.739h-.905v.905a.5.5 0 01-1 0v-.905h-.904a.5.5 0 010-1h.904V9.86a.5.5 0 111 0v.905h.904a.5.5 0 010 1zm.489-10.358h5.983a.7.7 0 100-1.4H4.637a.7.7 0 100 1.4z" })] })));
}
exports.default = SolidCaseCreationTime;
