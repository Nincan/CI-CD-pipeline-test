"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAlarm(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidAlarm" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { x: "-0.31587", y: "-0.69027", width: "13.21745", height: "13.21745", fill: "none" }, void 0), (0, jsx_runtime_1.jsx)("rect", { x: "-0.31587", y: "-0.69027", width: "13.21745", height: "13.21745", fill: "none" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7,1.26846A6.15084,6.15084,0,1,0,13.15084,7.4193,6.15133,6.15133,0,0,0,7,1.26846ZM9.392,9.81129a.68059.68059,0,0,1-.96363,0L6.5216,7.90453a.68293.68293,0,0,1-.205-.48523V4.68559A.68545.68545,0,0,1,7,4.00216H7a.68544.68544,0,0,1,.68343.68343v2.4535L9.392,8.84766A.68059.68059,0,0,1,9.392,9.81129ZM2.134.6192.1999,2.5533a.68061.68061,0,0,0,0,.96363h0a.68059.68059,0,0,0,.96363,0l1.9341-1.9341a.68059.68059,0,0,0,0-.96363h0A.68059.68059,0,0,0,2.134.6192Zm8.76837,0h0a.68059.68059,0,0,0,0,.96363l1.9341,1.9341a.68059.68059,0,0,0,.96363,0h0a.68061.68061,0,0,0,0-.96363L11.866.6192A.68059.68059,0,0,0,10.90237.6192Z" }, void 0)] }), void 0));
}
exports.default = SolidAlarm;
