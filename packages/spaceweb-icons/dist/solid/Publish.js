"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPublish(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPublish" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.99.9a.5.5 0 00-.01-.07.56.56 0 00-.02-.09V.72a.44.44 0 00-.06-.07.53.53 0 00-.07-.1V.54a.6.6 0 00-.11-.06.66.66 0 00-.08-.05l-.01-.01a.58.58 0 00-.09-.01.67.67 0 00-.07-.02.62.62 0 00-.06 0h-.07a.47.47 0 00-.06.01.53.53 0 00-.1.02L.35 5.69a.56.56 0 00-.36.5.56.56 0 00.31.5l3.12 1.6a1 1 0 001.02-.07L8.4 5.53 5.72 9.36a1 1 0 00-.05 1.07l1.65 2.89a.6.6 0 00.53.29h.02a.6.6 0 00.52-.34l5.56-12.1v-.01a.6.6 0 00.03-.1v-.05L14 .95l-.01-.06z", fillRule: "evenodd" }) })));
}
exports.default = SolidPublish;
