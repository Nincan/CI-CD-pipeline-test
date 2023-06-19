"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineTextAlignLeft(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineTextAlignLeft" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.229.95H.771a.7.7 0 100 1.401h12.458a.7.7 0 100-1.4zM.771 5.894H7a.7.7 0 100-1.4H.77a.7.7 0 100 1.4zM10.295 8.072H.771a.7.7 0 100 1.4h9.524a.7.7 0 100-1.4zM7 11.649H.77a.7.7 0 100 1.4H7a.7.7 0 100-1.4z" }) })));
}
exports.default = LineTextAlignLeft;
