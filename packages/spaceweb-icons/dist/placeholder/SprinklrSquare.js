"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderSprinklrSquare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "PlaceholderSprinklrSquare" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M-.033 0v14h14.066V0Zm5.498 10.138A5.127 5.127 0 0 0 2.48 9.093a.922.922 0 1 1-.033-1.842c1.178 0 2.804 1.759 3.119 2.837.016.067-.05.1-.1.05Zm.282-1.943c-.016.083-.1.083-.133 0a5.154 5.154 0 0 0-2.588-3.036 1.04 1.04 0 0 1-.746-1.062.959.959 0 0 1 1.028-.912 1.014 1.014 0 0 1 .63.232 5.712 5.712 0 0 1 1.81 4.778Zm1.145 3.17c-1.327-4.18 1.062-8.76 2.854-8.792a1.484 1.484 0 0 1 1.592 1.443 1.349 1.349 0 0 1-.796 1.31 7.76 7.76 0 0 0-3.517 6.04c-.017.082-.1.082-.133 0Zm4.646-2.256a5.33 5.33 0 0 0-2.987 1.046c-.066.033-.132 0-.116-.067.315-1.078 1.941-2.837 3.12-2.837a.93.93 0 1 1-.017 1.858Z" }) })));
}
exports.default = PlaceholderSprinklrSquare;
