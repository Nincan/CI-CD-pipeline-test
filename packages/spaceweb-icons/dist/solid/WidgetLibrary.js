"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidWidgetLibrary(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidWidgetLibrary" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.883 13.708c-.668 0-1.336.006-2.004-.001a1.082 1.082 0 0 1-1.126-1.108q-.016-1.888 0-3.776a1.073 1.073 0 0 1 1.093-1.105q2.024-.024 4.047-.001a1.029 1.029 0 0 1 1.094 1.093q.026 1.907 0 3.814a1.051 1.051 0 0 1-1.138 1.084h-1.966ZM3.119.291c.68 0 1.36-.004 2.04.001a.953.953 0 0 1 1.034 1.024c.006 1.27-.024 2.541.013 3.81a1.032 1.032 0 0 1-1.046 1.12q-2.04.028-4.081.002A1.075 1.075 0 0 1 0 5.109c.042-1.23.012-2.464.013-3.696a1.008 1.008 0 0 1 1.14-1.12q.983-.002 1.965 0ZM6.193 10.703a3.01 3.01 0 0 1-3.081 2.999 2.99 2.99 0 1 1 .016-5.975 2.983 2.983 0 0 1 3.065 2.976ZM10.905.29a3.04 3.04 0 0 1 3.08 2.981 3.04 3.04 0 0 1-3.098 2.973 3.01 3.01 0 0 1-3.119-2.99A3.009 3.009 0 0 1 10.905.29Z" }) })));
}
exports.default = SolidWidgetLibrary;
