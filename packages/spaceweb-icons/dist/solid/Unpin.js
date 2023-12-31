"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidUnpin(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidUnpin" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.099 12.713a.252.252 0 00-.003.352l.8.834.001.002a.252.252 0 00.356.002l1.88-1.843-1.196-1.196zm13.712-7.962L11.528 2.47 9.248.192a.724.724 0 00-.516-.214v-.002a.724.724 0 00-.726.721v.001h-.003l-.012 1.143-2.126 2.125 4.168 4.167 2.126-2.125 1.141-.011.003-.005a.726.726 0 00.508-1.24zM1.84.998a.628.628 0 00-.888.89l3.496 3.495-.625.625-3.028.022v.004A.723.723 0 00.239 7.27l3.246 3.245 3.246 3.246a.723.723 0 001.021.007l.003-.003a.724.724 0 00.213-.561h.002l.021-3.03.624-.624 3.561 3.562a.628.628 0 00.889-.889z" }) })));
}
exports.default = SolidUnpin;
