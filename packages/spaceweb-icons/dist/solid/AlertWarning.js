"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAlertWarning(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidAlertWarning" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 0a7 7 0 10.001 14.001A7 7 0 007 0zm1.733 10.141c-.722.68-1.237 1.104-1.574 1.296-.348.2-.63.296-.862.296a.686.686 0 01-.525-.211c-.129-.138-.194-.327-.194-.562 0-.664.382-2.225 1.167-4.77a.985.985 0 00.047-.304h-.007a.566.566 0 00-.283.104c-.135.084-1.057.462-1.24.537a.13.13 0 01-.146-.209c.523-.575 1.008-.992 1.444-1.238.45-.253.826-.376 1.151-.376.195 0 .35.046.462.138a.494.494 0 01.179.395c0 .104-.053.42-.508 1.942-.54 1.813-.813 2.915-.813 3.278 0 .044.01.078.029.104.007.01.013.016.017.02.142-.028.87-.35 1.51-.652a.13.13 0 01.146.212zm-.085-6.357c-.183.2-.394.302-.627.302a.64.64 0 01-.482-.203.72.72 0 01-.19-.516c0-.265.087-.494.258-.68a.83.83 0 01.63-.287c.196 0 .36.067.489.198.127.13.192.298.192.498 0 .26-.091.49-.27.688z" }, void 0) }), void 0));
}
exports.default = SolidAlertWarning;
