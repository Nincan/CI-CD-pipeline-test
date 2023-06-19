"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGrid2x3D(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid2x3D" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.428 2.223H.598a.5.5 0 00-.5.5v8.55a.5.5 0 00.5.5h8.706l.014.003.015-.003h4.095a.5.5 0 00.5-.5v-8.55a.5.5 0 00-.5-.5zm-.5 4.21h-3.11v-3.21h3.11zm-7.63-3.21h3.52v3.21h-3.52zm-4.2 0h3.2v3.21h-3.2zm4.2 4.21h3.52v3.34h-3.52zm4.52 3.34v-3.34h3.11v3.34z" }) })));
}
exports.default = SolidGrid2x3D;
