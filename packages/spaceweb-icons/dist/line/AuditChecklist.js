"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineAuditChecklist(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineAuditChecklist" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.572 5.273H.803a.754.754 0 00-.752.752.754.754 0 00.752.752h6.769a.754.754 0 00.752-.752.754.754 0 00-.752-.752zm0-3.008H.803a.754.754 0 00-.752.752.754.754 0 00.752.752h6.769a.754.754 0 00.752-.752.754.754 0 00-.752-.752zM.803 9.786h3.76a.754.754 0 00.753-.753.754.754 0 00-.752-.752H.804a.754.754 0 00-.753.752.754.754 0 00.752.753zm11.943-2.527L10.084 9.92l-1.06-1.06a.749.749 0 00-1.06 0 .749.749 0 000 1.06l1.594 1.594a.749.749 0 001.06 0l3.189-3.189a.749.749 0 000-1.06.742.742 0 00-1.06-.007z" }) })));
}
exports.default = LineAuditChecklist;
