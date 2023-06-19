"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidRecord(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidRecord" }, props, { children: (0, jsx_runtime_1.jsx)("switch", { children: (0, jsx_runtime_1.jsx)("g", { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 3.889c1.711 0 3.111 1.4 3.111 3.111S8.711 10.111 7 10.111 3.889 8.711 3.889 7 5.289 3.889 7 3.889zm0-2.333C3.998 1.556 1.556 3.998 1.556 7S3.998 12.444 7 12.444 12.444 10.002 12.444 7 10.002 1.556 7 1.556zM7 0c3.858 0 7 3.142 7 7s-3.142 7-7 7-7-3.142-7-7 3.142-7 7-7z" }) }) }) })));
}
exports.default = SolidRecord;
