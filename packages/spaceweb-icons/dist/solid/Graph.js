"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGraph(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGraph" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.72 9.796v4.2h-3v-4.2a.89.89 0 01.89-.88h1.23a.881.881 0 01.88.88zM8.22.886v13.11h-3V.886a.892.892 0 01.89-.89h1.23a.883.883 0 01.88.89zM3.72 4.716v9.28h-3v-9.28a.892.892 0 01.89-.89h1.23a.883.883 0 01.88.89z" }) })));
}
exports.default = SolidGraph;
