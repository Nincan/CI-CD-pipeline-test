"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAudience(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAudience" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.545 5.795a1.78 1.78 0 0 0 1.264-.524 1.795 1.795 0 0 0 0-2.53c-.672-.672-1.854-.672-2.528 0-.34.339-.526.788-.526 1.265s.187.927.526 1.266a1.78 1.78 0 0 0 1.264.523zm5.207-1.786a1.65 1.65 0 0 0 1.175-.487 1.665 1.665 0 0 0 0-2.35 1.683 1.683 0 0 0-2.35 0 1.645 1.645 0 0 0-.486 1.175c0 .445.172.863.487 1.176.314.313.731.486 1.174.486zM4.575 6.537h-.064a3.734 3.734 0 0 0-3.73 3.73v2.48c0 .31.251.56.56.56h6.405c.31 0 .56-.25.56-.56v-2.48a3.734 3.734 0 0 0-3.731-3.73zM9.738 4.73c-.915 0-1.774.355-2.42 1.001a.547.547 0 0 0 0 .776c.103.104 1.15 1.146 1.436 1.698.467.901.43 2.08.415 2.6a.213.213 0 0 0 .223.223c.728-.02 3.048-.078 3.28-.078a.548.548 0 0 0 .546-.548V8.21a3.48 3.48 0 0 0-3.48-3.48z" }) })));
}
exports.default = SolidAudience;
