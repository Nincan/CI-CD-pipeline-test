"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAnnounce(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAnnounce" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.47 2.17a.5.5 0 00-.78-.25L6 3.17l-5.34 4a1.98 1.98 0 001.14 3.46H2a2.54 2.54 0 005.02 0l1.27-.01h2a.5.5 0 00.48-.64zM4.5 11.6a1.35 1.35 0 01-1.3-.96H5.8a1.34 1.34 0 01-1.28.96zm4.14-1.97L6.9 3.76l.82-.61 1.9 6.47zM10.5 4.32a.5.5 0 00.36-.15l1.46-1.46a.5.5 0 00-.71-.7l-1.46 1.46a.5.5 0 00.35.85zM13.5 7.77h-1.75a.5.5 0 000 1h1.75a.5.5 0 100-1zM11.45 6.46l1.87-.73a.5.5 0 00-.36-.93l-1.87.72a.5.5 0 00.36.94z" }) })));
}
exports.default = SolidAnnounce;
