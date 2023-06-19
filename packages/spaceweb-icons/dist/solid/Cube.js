"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCube(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCube" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.55 3.22a.46.46 0 00-.22-.61L6.96.04a.46.46 0 00-.4.01L1.38 2.71a.46.46 0 000 .82l5.17 2.59a.46.46 0 00.41 0l5.38-2.7a.46.46 0 00.21-.2zm-6.29 3.3L1.12 3.94a.46.46 0 00-.66.4v6.63a.46.46 0 00.25.4l5.15 2.58a.46.46 0 00.66-.41V6.92a.46.46 0 00-.26-.4zm6.83-2.87a.46.46 0 00-.2.05L7.24 6.52a.46.46 0 00-.25.4v6.62a.46.46 0 00.66.41l5.63-2.77a.46.46 0 00.25-.41V4.1a.46.46 0 00-.45-.46z", fillRule: "evenodd" }) })));
}
exports.default = SolidCube;
