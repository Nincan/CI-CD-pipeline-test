"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPulseCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPulseCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 .061A6.939 6.939 0 1013.939 7 6.939 6.939 0 007 .061zm3.545 7.768H9.354l-.925 2.778a.526.526 0 01-.498.358.52.52 0 01-.496-.358L5.84 5.822l-.55 1.65a.52.52 0 01-.495.357h-1.57a.523.523 0 010-1.045h1.192l.928-2.777a.543.543 0 01.99 0l1.596 4.782.55-1.647a.523.523 0 01.495-.358h1.569a.523.523 0 110 1.045z" }) })));
}
exports.default = SolidPulseCircle;
