"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidStop(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidStop" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.878 2.317h6.244a1.565 1.565 0 011.56 1.561v6.244a1.565 1.565 0 01-1.56 1.56H3.878a1.565 1.565 0 01-1.56-1.56V3.878a1.565 1.565 0 011.56-1.56z" }) })));
}
exports.default = SolidStop;
