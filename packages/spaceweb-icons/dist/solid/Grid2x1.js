"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGrid2x1(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid2x1" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.405 2.224H.575a.5.5 0 00-.5.5v8.553a.5.5 0 00.5.5h12.83a.5.5 0 00.5-.5V2.724a.5.5 0 00-.5-.5zm-.5 1v3.205H1.075V3.224zm-11.83 7.553V7.429h11.83v3.348z" }) })));
}
exports.default = SolidGrid2x1;
