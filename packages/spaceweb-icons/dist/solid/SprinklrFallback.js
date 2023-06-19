"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSprinklrFallback(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSprinklrFallback" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.794 2.479h-.009l.018.153v8.078a2.11 2.11 0 01-.61 1.485 2.07 2.07 0 01-1.47.615h-8l-.045-.009a1.357 1.357 0 00.442.859 1.332 1.332 0 00.897.34h7.045a3.004 3.004 0 002.143-.892 3.062 3.062 0 00.884-2.164V3.822a1.345 1.345 0 00-1.295-1.343z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.764 11.886a1.873 1.873 0 001.166-1.73V1.863A1.872 1.872 0 0010.067 0H1.642A1.538 1.538 0 00.49.526C.462.552.43.573.404.6a1.797 1.797 0 00-.36.577 1.928 1.928 0 00-.133.685v8.293a1.872 1.872 0 001.863 1.862h8.293a2.045 2.045 0 00.697-.132zM4.809 8.282a3.714 3.714 0 00-2.164-.757.668.668 0 11-.024-1.334c.854 0 2.032 1.274 2.26 2.055.012.048-.036.072-.072.036zm.204-1.407c-.012.06-.072.06-.096 0a3.733 3.733 0 00-1.875-2.2.753.753 0 01-.54-.769.695.695 0 01.744-.66.735.735 0 01.457.167 4.138 4.138 0 011.31 3.462zm.83 2.297c-.962-3.03.769-6.346 2.067-6.37a1.075 1.075 0 011.153 1.045.977.977 0 01-.577.95 5.621 5.621 0 00-2.548 4.375c-.012.06-.072.06-.096 0zm3.365-1.635a3.861 3.861 0 00-2.164.757c-.048.024-.096 0-.084-.048.229-.78 1.406-2.055 2.26-2.055a.673.673 0 11-.012 1.346z" })] })));
}
exports.default = SolidSprinklrFallback;
