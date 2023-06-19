"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LinePlusOne(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LinePlusOne" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.616 7.83H5.164V4.38a.571.571 0 10-1.142 0v3.45H.572a.571.571 0 000 1.144h3.45v3.45a.571.571 0 101.142 0v-3.45h3.452a.571.571 0 000-1.143zm5.163-6.705a.564.564 0 00-.493-.101l-2.442.633a.57.57 0 10.287 1.106l1.727-.448v10.099a.571.571 0 101.142 0V1.577a.573.573 0 00-.221-.452z" }) })));
}
exports.default = LinePlusOne;
