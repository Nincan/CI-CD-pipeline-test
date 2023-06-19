"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Announcement.svg instead.
 */
function LineAnnouncement(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineAnnouncement" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.127 9.324H1.174A1.138 1.138 0 01.037 8.188V5.536a1.138 1.138 0 011.137-1.137h2.974a.6.6 0 010 1.2H1.174l.063 2.589 2.89-.063a.6.6 0 110 1.2z" }), (0, jsx_runtime_1.jsx)("path", { d: "M8.649 11.856a1.15 1.15 0 01-.564-.149L3.826 9.244a.6.6 0 11.601-1.039l4.157 2.404V3.125L4.45 5.519a.6.6 0 01-.602-1.04l4.23-2.448a1.139 1.139 0 011.148.006 1.121 1.121 0 01.559.976v7.709a1.123 1.123 0 01-.56.976 1.145 1.145 0 01-.575.158zM2.78 12.121a.6.6 0 01-.588-.486l-.503-2.586a.6.6 0 111.178-.229l.502 2.586a.6.6 0 01-.474.703.579.579 0 01-.115.012z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.67 12.121a.6.6 0 01-.589-.486L3.56 8.949a.6.6 0 111.178-.228l.522 2.685a.6.6 0 01-.475.703.579.579 0 01-.114.012z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.67 12.12H2.78a.6.6 0 110-1.2h1.89a.6.6 0 110 1.2zM13.364 7.467H11.98a.6.6 0 010-1.2h1.383a.6.6 0 010 1.2zM12.413 10.672a.598.598 0 01-.424-.176l-.978-.978a.6.6 0 01.848-.849l.978.98a.6.6 0 01-.424 1.023zM11.491 5.18a.6.6 0 01-.423-1.025l.978-.978a.6.6 0 11.848.849l-.979.977a.598.598 0 01-.424.176z" })] })));
}
exports.default = LineAnnouncement;
