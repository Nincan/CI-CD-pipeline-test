"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTiktokShare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTiktokShare" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "m13.434 5.671-1.394-1.33a1.286 1.286 0 0 0-.107-.095c-.026-.026-.05-.045-.07-.064L9.525 1.946a.916.916 0 0 0-1.545.659v1.292c-4.175 0-6.066 1.909-7.031 4.005a8.806 8.806 0 0 0-.926 3.084l-.006.032c-.005.053-.002.09-.004.138a2.781 2.781 0 0 0 0 .433 2.114 2.114 0 0 0 .03.265l.007.028c.054.258.154.415.307.415a.328.328 0 0 0 .337-.177l.023-.034a2.537 2.537 0 0 0 .332-.414c1.648-2.51 6.9-1.78 6.93-1.775v1.165a.801.801 0 0 0 .026.216v.006a.917.917 0 0 0 1.172.646.755.755 0 0 0 .317-.177l.507-.444 3.376-2.946a1.823 1.823 0 0 0 .057-2.692Z", fillRule: "evenodd" }) })));
}
exports.default = SolidTiktokShare;
