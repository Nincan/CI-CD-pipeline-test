"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLauchpad(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLauchpad" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.75 0A1.75 1.75 0 000 1.75v2.703a1.75 1.75 0 001.75 1.75h2.702a1.75 1.75 0 001.75-1.75V1.75A1.75 1.75 0 004.452 0zm7.797 0a1.75 1.75 0 00-1.75 1.75v2.703a1.75 1.75 0 001.75 1.75h2.703A1.75 1.75 0 0014 4.453V1.75A1.75 1.75 0 0012.25 0zm-1.75 9.547a1.75 1.75 0 011.75-1.75h2.703A1.75 1.75 0 0114 9.547v2.703A1.75 1.75 0 0112.25 14H9.547a1.75 1.75 0 01-1.75-1.75zM1.75 7.797A1.75 1.75 0 000 9.547v2.703A1.75 1.75 0 001.75 14h2.702a1.75 1.75 0 001.75-1.75V9.547a1.75 1.75 0 00-1.75-1.75z", fillRule: "evenodd" }) })));
}
exports.default = SolidLauchpad;
