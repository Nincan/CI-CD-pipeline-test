"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineYoutubeDislike(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineYoutubeDislike" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.89.39H2.777a1.695 1.695 0 00-1.703 1.251L.033 6.308a1.612 1.612 0 001.703 1.858h3.29l-1.182 3.842A1.28 1.28 0 005.15 13.61a1.622 1.622 0 001.182-.506l4.557-4.938H14V.39zM5.756 12.576a.823.823 0 01-.607.257.588.588 0 01-.49-.234.416.416 0 01-.07-.366l1.182-3.84.311-1.004H1.736a1.023 1.023 0 01-.8-.358.658.658 0 01-.14-.56l1.041-4.666a.92.92 0 01.941-.638h7.334v6.696zm7.465-5.187H10.89V1.167h2.333z" }) })));
}
exports.default = LineYoutubeDislike;
