"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderNoLists(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 40 40", "data-icon-name": "PlaceholderNoLists" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M36.238 6.595a.974.974 0 00-.01-.11c-.002-.009-.007-.015-.01-.024a.981.981 0 00-.056-.144.999.999 0 00-.051-.114.989.989 0 00-.09-.116.986.986 0 00-.084-.1 1.002 1.002 0 00-.115-.084.973.973 0 00-.114-.077l-.016-.01a.988.988 0 00-.132-.043.959.959 0 00-.105-.037L7.865.106A.994.994 0 007.046.3l-2.92 2.3-.007.007-.006.004c-.007.005-.01.014-.016.02a.984.984 0 00-.225.287c-.014.025-.027.048-.038.074a.988.988 0 00-.084.373c0 .007-.005.013-.005.02v29.91a1 1 0 00.8.98l27.58 5.62a.99.99 0 00.2.02.711.711 0 00.44-.116.982.982 0 00.176-.096l2.93-2.29a1 1 0 00.384-.788V6.715a.976.976 0 00-.017-.12zm-23.27-.511L31.324 9.83v7.748l-18.358-3.907zm-2 7.163l-5.223-1.112V4.61l5.222 1.066zm-5.223.934l5.222 1.111v7.824l-5.222-1.111zm7.222 1.537l18.09 3.85a1.02 1.02 0 00.209.021c.02 0 .039-.009.06-.01v7.87l-18.359-3.907zm18.09 13.719a1.02 1.02 0 00.209.021c.02 0 .039-.009.06-.01v8.243l-18.359-3.74v-8.364zM5.745 24.05l5.222 1.112v8.38L5.745 32.48z" }) })));
}
exports.default = PlaceholderNoLists;
