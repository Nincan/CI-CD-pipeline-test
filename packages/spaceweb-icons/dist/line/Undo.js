"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineUndo(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineUndo" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.565.768c.342-.1.704.1.803.445l.35 1.22C3.064.857 4.998-.04 7.061 0c3.829.056 6.899 3.24 6.844 7.1-.054 3.825-3.159 6.9-6.942 6.9h-.1A6.974 6.974 0 01.96 10.521a.649.649 0 011.124-.65 5.594 5.594 0 004.879 2.83c3.075 0 5.6-2.505 5.645-5.621.044-3.144-2.452-5.737-5.565-5.781A5.563 5.563 0 002.941 3l1.038-.224a.65.65 0 01.274 1.268l-2.63.57a.647.647 0 01-.762-.456L.119 1.57A.65.65 0 01.565.768z" }, void 0) }), void 0));
}
exports.default = LineUndo;
