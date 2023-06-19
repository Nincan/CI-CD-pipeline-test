"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAudit(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAudit" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.35 5.31A1.88 1.88 0 114.46 7.2a1.88 1.88 0 011.89-1.88zm0-.75A2.64 2.64 0 107.8 9.4l1.56 1.56.07.06a.53.53 0 00.68-.81L8.55 8.64a2.64 2.64 0 00-2.2-4.08zM7.66 0a1.5 1.5 0 011.08.44l3.4 3.45a1.5 1.5 0 01.44 1.05l.05 7.55a1.56 1.56 0 01-1.57 1.5H3.11a1.5 1.5 0 01-1.58-1.41L1.45 1.48A1.55 1.55 0 013.02 0z", fillRule: "evenodd" }) })));
}
exports.default = SolidAudit;
