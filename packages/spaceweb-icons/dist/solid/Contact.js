"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidContact(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidContact" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.892 1.41h-.7V.012H9.796v1.397h-5.59V.012H2.807v1.397h-.699A1.397 1.397 0 00.711 2.808v9.784a1.397 1.397 0 001.397 1.397h9.784a1.402 1.402 0 001.397-1.397V2.807a1.402 1.402 0 00-1.397-1.397zM7 3.506a2.096 2.096 0 11-2.096 2.096A2.094 2.094 0 017 3.506zm4.193 8.386H2.807v-.7c0-1.397 2.795-2.165 4.193-2.165s4.193.768 4.193 2.166z" }) })));
}
exports.default = SolidContact;
