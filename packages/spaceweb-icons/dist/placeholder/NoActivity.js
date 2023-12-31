"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderNoActivity(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 40 40", "data-icon-name": "PlaceholderNoActivity" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M36.72 6.475a.974.974 0 00-.01-.115c-.003-.009-.008-.016-.01-.025a.981.981 0 00-.054-.136 1.008 1.008 0 00-.055-.122.99.99 0 00-.085-.11 1.006 1.006 0 00-.089-.106.997.997 0 00-.11-.08.984.984 0 00-.119-.08l-.015-.01a3.61 3.61 0 01-.237-.081L8.346-.02a1.004 1.004 0 00-.819.194l-2.92 2.3-.008.008-.007.003c-.008.007-.01.017-.018.024a.983.983 0 00-.222.282c-.014.026-.028.05-.04.077a.986.986 0 00-.083.37c0 .008-.004.014-.004.022v29.91a1 1 0 00.8.98l27.58 5.62a1.014 1.014 0 00.2.02.701.701 0 00.434-.114.967.967 0 00.181-.098l.017-.013 2.914-2.277a.999.999 0 00.384-.788V6.59a.976.976 0 00-.016-.115zM6.224 4.485l25.58 5.222v27.859l-25.58-5.213z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.934 12.568l2.291.484a1.89 1.89 0 001.296 1.1l9.872 2.085a1.13 1.13 0 001.438-1.134 1.871 1.871 0 00-1.438-1.742l-9.872-2.085a1.139 1.139 0 00-1.296.552l-2.291-.484a1.89 1.89 0 00-1.297-1.1 1.13 1.13 0 00-1.437 1.134 1.86 1.86 0 00.928 1.537v4.078a1.105 1.105 0 00-.928 1.145 1.86 1.86 0 00.928 1.536v4.079a1.105 1.105 0 00-.928 1.144 1.87 1.87 0 001.437 1.742 1.139 1.139 0 001.297-.552l2.291.484a1.89 1.89 0 001.296 1.1l9.872 2.085a1.13 1.13 0 001.438-1.134 1.87 1.87 0 00-1.438-1.742l-9.872-2.085a1.139 1.139 0 00-1.296.552l-2.291-.484a1.945 1.945 0 00-.787-.894v-4.08a1.073 1.073 0 00.787-.562l2.291.484a1.89 1.89 0 001.296 1.1l9.872 2.085a1.13 1.13 0 001.438-1.134 1.87 1.87 0 00-1.438-1.741l-9.872-2.086a1.139 1.139 0 00-1.296.552l-2.291-.484a1.946 1.946 0 00-.787-.894v-4.08a1.073 1.073 0 00.787-.561z" })] })));
}
exports.default = PlaceholderNoActivity;
