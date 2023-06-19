"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMilestone(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMilestone" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9 12H5a.5.5 0 110-1h4a.5.5 0 110 1zm4.89 1.19L7.5 5.32V3.5H11a.5.5 0 00.5-.5V.5A.5.5 0 0011 0H7a.5.5 0 00-.5.5v4.82L.11 13.19A.5.5 0 00.5 14h13a.5.5 0 00.39-.81z" }) })));
}
exports.default = SolidMilestone;
