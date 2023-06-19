"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAnalytic(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 17 17", "data-icon-name": "SolidAnalytic" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.5 0A8.5 8.5 0 0117 8.5V17H8.5a8.5 8.5 0 010-17zm1.96 5L7.562 8.78 6.25 7.413 4.556 9.174h-.34a.716.716 0 100 1.432h.978L6.25 9.504 7.687 11l2.604-3.38 1.716 2.986h1.777a.716.716 0 100-1.432h-.92z" }) })));
}
exports.default = SolidAnalytic;
