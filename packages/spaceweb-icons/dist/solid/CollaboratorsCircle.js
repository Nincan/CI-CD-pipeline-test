"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCollaboratorsCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCollaboratorsCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 0 0-7 7 7 7 0 0 0 14 0 7 7 0 0 0-7-7Zm-.001 2.974h.002a1.188 1.188 0 0 1 1.215 1.16A1.198 1.198 0 0 1 7 5.308h-.001a1.188 1.188 0 0 1-1.216-1.16 1.198 1.198 0 0 1 1.217-1.173Zm-3.172 7.337-.11.005-.111-.005A1.194 1.194 0 0 1 2.5 9.143a1.158 1.158 0 0 1 .509-.952l.01-.007a1.243 1.243 0 0 1 .698-.213 1.214 1.214 0 0 1 1.217 1.172 1.193 1.193 0 0 1-1.107 1.168Zm3.4.709-.217.006-.206-.006a3.598 3.598 0 0 1-1.688-.528l-.073-.046.1-.103a1.798 1.798 0 0 0 .466-1.2A1.86 1.86 0 0 0 3.716 7.32a1.167 1.167 0 0 0-.21.012A3.366 3.366 0 0 1 5.08 4.82l.136-.081.05.123a1.892 1.892 0 0 0 1.733 1.096l.144-.005a1.88 1.88 0 0 0 1.639-1.214l.159.095a3.363 3.363 0 0 1 1.537 2.397l.013.1-.071-.008c-.046-.003-.09-.003-.138-.003h-.016a1.838 1.838 0 0 0-1.853 1.823 1.764 1.764 0 0 0 .565 1.303 3.594 3.594 0 0 1-1.75.574Zm3.166-.71-.11.006-.108-.005a1.246 1.246 0 0 1-.306-.066 1.18 1.18 0 0 1-.803-1.102 1.198 1.198 0 0 1 1.217-1.172 1.171 1.171 0 0 1 .11 2.34Z" }) })));
}
exports.default = SolidCollaboratorsCircle;
