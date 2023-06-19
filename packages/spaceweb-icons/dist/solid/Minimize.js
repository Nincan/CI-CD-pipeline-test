"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMinimize(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 16 16", "data-icon-name": "SolidMinimize" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.924 7.018a.999.999 0 00.617.923c.123.051.252.077.383.078l5.998.1a1 1 0 00.001-2l-3.585-.101 3.394-3.413a1 1 0 10-1.414-1.414L9.924 4.603 9.804 1a1 1 0 10-2 0l.12 6.018zm.075 1.894a.999.999 0 00-.617-.923 1.013 1.013 0 00-.383-.078L1 7.811a1 1 0 000 2l3.585.101-3.398 3.399A1 1 0 102.6 14.725l3.398-3.398.12 3.602a1 1 0 102 0l-.12-6.017z" }) })));
}
exports.default = SolidMinimize;
