"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Audience.svg instead.
 */
function SolidCollaboration(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 19.309 16.681", "data-icon-name": "SolidCollaboration" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.904 0c1.52 0 2.724 1.257 2.724 2.777v.052c-.052.21-.052.419-.104.629a2.703 2.703 0 01-2.62 1.99A2.706 2.706 0 012.18 2.724 2.706 2.706 0 014.904 0zm7.855.48a3.405 3.405 0 110 6.81 3.405 3.405 0 010-6.81zM7.037 5.968c.526.296 1.075.965 1.221 1.18-1.857 1.126-3.225 3.164-3.762 5.47-1.564-.053-3.03-.536-4.496-1.394 0-2.306 1.173-4.345 2.834-5.256.587.536 1.32.858 2.101.858.782 0 1.564-.322 2.102-.858zm8.51 1.93c2.198 1.288 3.762 3.916 3.762 6.973-4.545 2.36-8.942 2.467-13.096 0 0-3.057 1.515-5.739 3.763-6.972a4.029 4.029 0 002.785 1.126c1.075 0 2.052-.43 2.785-1.126z" }) })));
}
exports.default = SolidCollaboration;
