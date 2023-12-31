"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSourceCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSourceCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 0 0-7 7 7 7 0 0 0 14 0 7 7 0 0 0-7-7Zm2.24 2.847h1.496a.419.419 0 0 1 .417.417v1.49a.416.416 0 0 1-.712.29l-.503-.499L8.35 6.133a.342.342 0 1 1-.484-.484l1.588-1.587-.239-.238-.27-.265a.419.419 0 0 1 .296-.712ZM8.43 6.57l1.486-1.487a3.498 3.498 0 0 1 .028 3.802L8.444 7.386a1.508 1.508 0 0 0-.015-.816Zm.488-2.485L7.43 5.57a1.508 1.508 0 0 0-.816-.015L5.115 4.057a3.498 3.498 0 0 1 3.802.028ZM2.834 3.24a.419.419 0 0 1 .417-.417h1.495a.419.419 0 0 1 .295.712l-.27.264-.238.238 1.614 1.615a.342.342 0 0 1-.485.483L4.048 4.522l-.502.499a.416.416 0 0 1-.712-.29Zm2.727 4.2L4.074 8.926a3.498 3.498 0 0 1-.02-3.812L5.55 6.61a1.508 1.508 0 0 0 .012.83Zm-.808 3.713h-1.49a.419.419 0 0 1-.417-.417V9.242a.419.419 0 0 1 .712-.295l.264.27.239.238 1.59-1.59a.342.342 0 0 1 .484.484l-1.591 1.59.499.503a.416.416 0 0 1-.29.712Zm.32-1.228L6.56 8.439a1.509 1.509 0 0 0 .83.011l1.495 1.496a3.498 3.498 0 0 1-3.812-.02Zm6.124.844a.419.419 0 0 1-.417.417H9.29a.416.416 0 0 1-.29-.712l.499-.503-1.656-1.656a.342.342 0 0 1 .484-.484l1.655 1.656.239-.239.264-.27a.419.419 0 0 1 .712.296Z" }) })));
}
exports.default = SolidSourceCircle;
