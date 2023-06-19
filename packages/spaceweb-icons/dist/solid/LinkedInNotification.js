"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLinkedInNotification(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLinkedInNotification" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "m8.013 11.841 5.987.07a4.39 4.39 0 0 0-1.335-3.309L1.412 8.47A4.397 4.397 0 0 0 0 11.747l4.885.058a1.646 1.646 0 1 0 3.156.112c-.007-.027-.02-.05-.028-.076ZM7.275.028c-4.392-.051-4.982 3.51-5.027 7.354l9.607.112C11.906 3.103 10.789.07 7.275.028Z" }) })));
}
exports.default = SolidLinkedInNotification;
