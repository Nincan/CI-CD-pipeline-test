"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGrid(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.62 8c.21 0 .38.17.38.38v5.24c0 .21-.17.38-.38.38H.38a.38.38 0 01-.38-.38V8.38C0 8.17.17 8 .38 8h5.24zm8 0c.21 0 .38.17.38.38v5.24c0 .21-.17.38-.38.38H8.38a.38.38 0 01-.38-.38V8.38c0-.21.17-.38.38-.38h5.24zm-8-8c.21 0 .38.17.38.38v5.24c0 .21-.17.38-.38.38H.38A.38.38 0 010 5.62V.38C0 .17.17 0 .38 0h5.24zm8 0c.21 0 .38.17.38.38v5.24c0 .21-.17.38-.38.38H8.38A.38.38 0 018 5.62V.38c0-.21.17-.38.38-.38h5.24z" }) })));
}
exports.default = SolidGrid;
