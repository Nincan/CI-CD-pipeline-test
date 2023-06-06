"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidExportPresentation(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidExportPresentation" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M11.844.028H2.203A2.15 2.15 0 00.029 2.155v6.283a2.15 2.15 0 002.127 2.174h4.11v.704a.677.677 0 01-.65.705h-.535a1.189 1.189 0 00-1.214 1.163v.531a.23.23 0 00.255.255h5.756a.23.23 0 00.255-.204.223.223 0 000-.05v-.48A1.189 1.189 0 008.97 12.02h-.53a.677.677 0 01-.705-.649v-.76h4.063a2.15 2.15 0 002.174-2.127V2.202A2.15 2.15 0 0011.844.028zm-1.75 5.08l-.73.736-1.456 1.47a.305.305 0 01-.215.105.246.246 0 01-.032-.002.274.274 0 01-.248-.288V6.112l-.077-.002c-.098-.004-.19-.008-.29-.007a3.646 3.646 0 00-1.425.262 2.51 2.51 0 00-1.157.923 2.213 2.213 0 00-.127.22.278.278 0 01-.247.166.253.253 0 01-.051-.005.273.273 0 01-.23-.264 3.363 3.363 0 01.478-2.013 3.414 3.414 0 012.058-1.587 4.354 4.354 0 011.06-.185h.008v-.941a.275.275 0 01.228-.288.261.261 0 01.217.055.422.422 0 01.042.039q1.097 1.09 2.193 2.182a.279.279 0 010 .44z" }, void 0) }), void 0));
}
exports.default = SolidExportPresentation;
