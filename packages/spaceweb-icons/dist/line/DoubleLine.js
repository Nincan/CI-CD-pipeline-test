"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineDoubleLine(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 121.805 121.805", "data-icon-name": "LineDoubleLine" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.308 85.264h107.188c4.037 0 7.309-3.271 7.309-7.31s-3.271-7.309-7.309-7.309H7.308C3.271 70.646 0 73.916 0 77.954s3.271 7.31 7.308 7.31zM7.308 51.158h107.188a7.309 7.309 0 100-14.617H7.308A7.307 7.307 0 000 43.849a7.308 7.308 0 007.308 7.309z" }) })));
}
exports.default = LineDoubleLine;
