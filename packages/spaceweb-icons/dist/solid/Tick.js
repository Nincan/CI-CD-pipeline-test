"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTick(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 8 8", "data-icon-name": "SolidTick" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.9 1.6L7.2.8c-.1-.1-.3-.1-.4 0L2.5 5.2 1.2 3.8c-.1-.1-.3-.1-.4 0l-.7.8c-.1.1-.1.2 0 .3l1.5 1.5.7.7c.1.1.3.1.4 0l5.2-5.2c.1-.1.1-.2 0-.3z" }) })));
}
exports.default = SolidTick;
