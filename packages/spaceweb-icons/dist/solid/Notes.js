"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidNotes(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidNotes" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.54.003h-11a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h6.722a.5.5 0 00.355-.148l5.238-3.976A.5.5 0 0014 9.527l.04-8.024a1.5 1.5 0 00-1.5-1.5zM2.51 2.582h8.98a.7.7 0 110 1.4H2.51a.7.7 0 110-1.4zM7 10.227H2.51a.7.7 0 110-1.4H7a.7.7 0 110 1.4zm2.448-2.993H2.51a.7.7 0 010-1.4h6.938a.7.7 0 010 1.4z" }, void 0) }), void 0));
}
exports.default = SolidNotes;
