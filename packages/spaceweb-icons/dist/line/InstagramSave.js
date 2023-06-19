"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineInstagramSave(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineInstagramSave" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.687 1.328V12.06l4.17-2.919a1.992 1.992 0 012.285 0l4.17 2.92V1.327zM12.977 0a.664.664 0 01.664.664v12.67a.664.664 0 01-1.045.545l-5.215-3.65a.664.664 0 00-.762 0l-5.215 3.65a.664.664 0 01-1.045-.544V.665A.664.664 0 011.023 0z", fillRule: "evenodd" }) })));
}
exports.default = LineInstagramSave;
