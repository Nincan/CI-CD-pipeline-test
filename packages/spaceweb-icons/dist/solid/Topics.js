"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTopics(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTopics" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.288 5.857A4.37 4.37 0 003.12 4.69a3.498 3.498 0 00.38 6.977h7.582a2.908 2.908 0 00.205-5.81zM9.299 7.244a.8.8 0 01-.22-.044.465.465 0 01-.093.106L7.26 8.62a.478.478 0 01-.62-.033l-.767-.727-1.427 1.07a.478.478 0 01-.574-.766l1.75-1.311a.478.478 0 01.616.035l.765.725 1.401-1.069a.46.46 0 01.085-.041.778.778 0 01-.017-.086.826.826 0 11.826.826z" }) })));
}
exports.default = SolidTopics;
