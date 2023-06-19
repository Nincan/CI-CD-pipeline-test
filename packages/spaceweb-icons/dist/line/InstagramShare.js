"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineInstagramShare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineInstagramShare" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.374 1.237a1.39 1.39 0 00-.86 2.469l3.67 2.988a.28.28 0 01.102.197l.307 4.722a1.39 1.39 0 002.508.731l6.628-9.048a1.39 1.39 0 00-1.14-2.211zm-.157 1.606a.278.278 0 01.172-.493l10.328-.141L4.811 5.77zm4.169 3.882l.01.094.306 4.722a.278.278 0 00.502.147l6.338-8.653z", fillRule: "evenodd" }) })));
}
exports.default = LineInstagramShare;
