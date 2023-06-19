"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidUnhold(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidUnhold" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.535 2c0-.575 0-2-1.5-2a1.38 1.38 0 0 0-1.059.403l2.56 2.56zm3.003 3.965 3 3V2c0-.575 0-2-1.5-2-1.647 0-1.5 1.678-1.5 2zm5.165 6.807L1.287.356a.7.7 0 0 0-.99.99l2.238 2.238V12c0 .39-.003 2 1.5 2 1.5 0 1.5-1.712 1.5-2V6.584l3.003 3.003V12c0 .39-.003 2 1.5 2a1.471 1.471 0 0 0 1.458-1.455l1.217 1.217a.7.7 0 1 0 .99-.99z" }) })));
}
exports.default = SolidUnhold;
