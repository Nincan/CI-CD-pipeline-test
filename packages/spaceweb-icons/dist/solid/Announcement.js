"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAnnouncement(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAnnouncement" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", tslib_1.__assign({ id: "solid_announcement__a" }, { children: (0, jsx_runtime_1.jsx)("path", { fill: "none", d: "M0 1.272h14v11.456H0z" }) })) }), (0, jsx_runtime_1.jsx)("g", tslib_1.__assign({ clipPath: "url(#solid_announcement__a)" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.234 1.432a1.131 1.131 0 0 0-1.148-.009L3.973 3.806H1.14A1.15 1.15 0 0 0 0 4.954V7.62a1.148 1.148 0 0 0 1.14 1.14h.574l.448 3.455v.017a.777.777 0 0 0 .078.193.43.43 0 0 0 .14.16.436.436 0 0 0 .14.078c.008.017.017.017.025.017a.543.543 0 0 0 .202.045h1.898a.426.426 0 0 0 .238-.062.161.161 0 0 0 .09-.044.622.622 0 0 0 .14-.132.436.436 0 0 0 .078-.14.03.03 0 0 0 .009-.025.545.545 0 0 0 .044-.205c0-.044-.008-.09-.008-.131l-.291-2.644 3.133 1.817a1.172 1.172 0 0 0 .574.151 1.188 1.188 0 0 0 .574-.16 1.137 1.137 0 0 0 .566-.988v-7.75a1.107 1.107 0 0 0-.558-.98ZM13.4 5.688h-1.394a.6.6 0 0 0 0 1.198h1.395a.6.6 0 0 0 0-1.198ZM11.892 8.107a.606.606 0 0 0-.857.857l.988.988a.606.606 0 0 0 .857-.856ZM11.52 4.593a.572.572 0 0 0 .422-.177l.988-.98a.606.606 0 1 0-.856-.857l-.989.98a.603.603 0 0 0 0 .857.622.622 0 0 0 .434.177Z" }) }))] })));
}
exports.default = SolidAnnouncement;
