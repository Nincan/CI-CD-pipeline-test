"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFolderMappedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFolderMappedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#acdcfe", d: "M13.995 3.022v8.64a.776.776 0 01-.48.71.942.942 0 01-.3.06l-6.13-10.17h6.14a.762.762 0 01.77.76z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#bbe5fe", d: "M13.215 12.433H.775a.77.77 0 01-.77-.77V1.503a.767.767 0 01.47-.71.803.803 0 01.3-.06h4.78a.768.768 0 01.77.76.768.768 0 00.76.77z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "11.675", cy: "4.625", r: "1.72", fill: "#81c1fe" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M12.676 4.24a.084.084 0 00-.005-.043v-.002l-.003-.004a.084.084 0 00-.014-.021l-.384-.4a.086.086 0 10-.124.12l.244.253h-1.516a.086.086 0 100 .172h1.52l-.253.27a.086.086 0 10.125.117l.389-.414.002-.005a.084.084 0 00.017-.033zm-.2.694h-1.519l.253-.27a.086.086 0 10-.126-.117l-.388.414-.002.005a.083.083 0 00-.017.034l-.002.01a.084.084 0 00.005.043v.001l.003.004a.084.084 0 00.014.022l.384.4a.086.086 0 10.124-.12l-.244-.254h1.515a.086.086 0 000-.172z" })] })));
}
exports.default = SolidFolderMappedClr;
