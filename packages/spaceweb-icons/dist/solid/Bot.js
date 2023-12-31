"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidBot(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 13.3 14", "data-icon-name": "SolidBot" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.97 0a.34.34 0 01.33.34V10.6S13.3 14 6.65 14C.27 14 .01 10.86 0 10.6V.34A.34.34 0 01.33 0a.34.34 0 01.34.34v4.54c.76-1.36 2.42-2.83 5.98-2.83s5.22 1.47 5.98 2.83V.34a.34.34 0 01.34-.34zM9.2 6H3.96a2.5 2.5 0 00.13 5h5.25a2.5 2.5 0 00-.13-5zM4.09 8a1 1 0 11-1.02 1 1.01 1.01 0 011.02-1zm5.12 0a1 1 0 11-1.03 1 1.01 1.01 0 011.03-1z" }) })));
}
exports.default = SolidBot;
