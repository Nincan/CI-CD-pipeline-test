"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderContacts(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 40 40", "data-icon-name": "PlaceholderContacts" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M35.802 6.475a.978.978 0 00-.01-.115c-.002-.009-.007-.016-.01-.025a.98.98 0 00-.053-.136 1.006 1.006 0 00-.055-.122.992.992 0 00-.085-.11 1.007 1.007 0 00-.089-.106.997.997 0 00-.11-.08.985.985 0 00-.119-.08l-.015-.01a.97.97 0 00-.121-.04.98.98 0 00-.116-.041L7.429-.02a1.007 1.007 0 00-.82.194l-2.92 2.3-.007.008-.006.003c-.006.005-.008.013-.014.018a.988.988 0 00-.226.289c-.014.026-.027.049-.039.076a.99.99 0 00-.083.371c0 .007-.005.014-.005.02v3.905a2.737 2.737 0 00-1.831 1.752c-.377 1.294.368 2.687 1.83 3.555v3.253a2.737 2.737 0 00-1.83 1.753c-.377 1.293.368 2.686 1.83 3.554v3.253a2.736 2.736 0 00-1.83 1.753c-.373 1.278.349 2.657 1.83 3.548v3.585a1 1 0 00.802.98l27.58 5.62a1.014 1.014 0 00.199.02.685.685 0 00.423-.108.983.983 0 00.193-.104l2.93-2.29a1.002 1.002 0 00.384-.788V6.59a.975.975 0 00-.017-.115zM5.31 30.31a5.341 5.341 0 00.856.076 3.176 3.176 0 003.25-1.968 1 1 0 10-1.913-.585c-.119.387-1.046.728-2.193.435v-6.521c.026.004.055.014.08.018a5.332 5.332 0 00.796.06 3.142 3.142 0 003.231-1.973A1 1 0 107.5 19.28c-.106.36-.865.65-1.828.505a3.333 3.333 0 01-.363-.08v-6.518c.026.004.055.014.08.018a5.33 5.33 0 00.796.06 3.142 3.142 0 003.231-1.974 1 1 0 10-1.916-.57c-.106.36-.865.65-1.828.504a3.336 3.336 0 01-.363-.08v-6.66l25.58 5.222v27.859l-25.58-5.213z" }), (0, jsx_runtime_1.jsx)("path", { d: "M18.269 19.972c-3.527-.821-6.386 1.644-6.386 5.506 0 .084.02.168.022.252l12.727 2.962c.003-.083.023-.157.023-.24 0-3.863-2.859-7.66-6.386-8.48z" }), (0, jsx_runtime_1.jsx)("ellipse", { cx: "18.269", cy: "15.918", rx: "2.454", ry: "3.119", transform: "rotate(-30.723 18.269 15.918)" })] })));
}
exports.default = PlaceholderContacts;
