"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineAnnouncementCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineAnnouncementCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zm2.655 5.142l.64-.639a.392.392 0 11.553.554l-.64.639a.392.392 0 11-.553-.554zm-.84 4.288a.737.737 0 01-.366.64.763.763 0 01-.372.104.774.774 0 01-.372-.098L5.674 8.894l.189.973c0 .026.006.059.006.085a.293.293 0 01-.026.13.024.024 0 01-.006.02.419.419 0 01-.052.092.38.38 0 01-.092.085.123.123 0 01-.059.026.31.31 0 01-.156.039H4.243a.292.292 0 01-.13-.026.024.024 0 01-.02-.007.42.42 0 01-.091-.052.28.28 0 01-.092-.105.417.417 0 01-.052-.124v-.013l-.294-1.502h-.372a.741.741 0 01-.738-.738v-1.73a.743.743 0 01.738-.745h1.841l2.672-1.548a.74.74 0 01.744.006.727.727 0 01.366.634zm1.996-.147a.391.391 0 01-.554 0l-.639-.639a.392.392 0 11.554-.554l.639.64a.391.391 0 010 .553zm.344-1.978h-.903a.392.392 0 010-.784h.903a.392.392 0 010 .784z" }) })));
}
exports.default = LineAnnouncementCircle;
