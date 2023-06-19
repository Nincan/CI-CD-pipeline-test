"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDesktop(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDesktop" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.606.697H1.401A1.405 1.405 0 000 2.097v7.704a1.405 1.405 0 001.4 1.401h2.102c-.385.385-.7.61-.7 1.114a.986.986 0 00.987.987h6.422a.986.986 0 00.988-.987c0-.505-.309-.722-.7-1.114h2.1a1.405 1.405 0 001.4-1.4V2.097A1.394 1.394 0 0012.607.697zm0 9.104H1.401V2.098h11.205z" }) })));
}
exports.default = SolidDesktop;
