"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidBillingPlan(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidBillingPlan" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.93 1.395H8.79a1.862 1.862 0 00-3.58 0H2.06a1.18 1.18 0 00-.42.04 1.073 1.073 0 00-.65 1v10.4a1.11 1.11 0 001.08 1.12h9.86a1.08 1.08 0 00.42-.13 1.058 1.058 0 00.66-.99v-10.4a1.048 1.048 0 00-1.08-1.04zm-4.933-.3a.69.69 0 11-.69.69.69.69 0 01.69-.69zm.767 9.972v.182a.71.71 0 01-1.421 0v-.193a1.883 1.883 0 01-1.378-1.072.482.482 0 01.048-.45.49.49 0 01.407-.217h.114a.5.5 0 01.46.336c.135.344.491.52 1.059.52.928 0 1-.483 1-.63 0-.302-.136-.643-1.146-.884-.854-.206-1.99-.614-1.99-1.78a1.65 1.65 0 011.426-1.55v-.19a.71.71 0 011.42 0v.204a1.71 1.71 0 011.2 1.08.47.47 0 01-.055.438.491.491 0 01-.405.21H8.38a.478.478 0 01-.45-.356c-.102-.335-.39-.498-.878-.498-.608 0-1 .257-1 .653 0 .297.192.532 1.148.78.983.256 1.988.68 1.988 1.888a1.57 1.57 0 01-1.425 1.529z" }) })));
}
exports.default = SolidBillingPlan;
