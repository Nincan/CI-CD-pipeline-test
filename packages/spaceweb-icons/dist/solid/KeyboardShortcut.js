"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidKeyboardShortcut(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidKeyboardShortcut" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.874 10.432l-.51-.52a.173.173 0 01-.05-.04l-.9-.91-.89-.9-1.34-1.34-.71-.72a.513.513 0 00-.22-.14.784.784 0 00-.46.01.492.492 0 00-.2.13l-3.83 3.87-.01.01-.55.55a.63.63 0 00-.14.69.648.648 0 00.59.391h1.49v1.819a.642.642 0 00.63.64h4.52a.636.636 0 00.63-.64v-1.819h1.5a.638.638 0 00.45-1.081zm1.901-5.512h-.95v-.49h.95a2.215 2.215 0 10-2.22-2.22v.95h-.49v-.95a2.216 2.216 0 10-2.22 2.22h.95v.49h-.95a2.164 2.164 0 00-.888.195 1.497 1.497 0 01.251.208l.688.697.17.17h.729v.729l.436.436.646.653a2.142 2.142 0 00.189-.868v-.95h.49v.95a2.215 2.215 0 102.219-2.22zm-.95-2.71a.95.95 0 11.95.95h-.95zm-3.03.95h-.95a.95.95 0 11.95-.95zm1.76 1.905h-.49v-.49h.49zm2.22 3.025a.95.95 0 01-.95-.95v-.95h.95a.95.95 0 110 1.9z" }, void 0) }), void 0));
}
exports.default = SolidKeyboardShortcut;
