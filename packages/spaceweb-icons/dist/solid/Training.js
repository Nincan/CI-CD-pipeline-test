"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTraining(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTraining" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.974 7.783v1.872a1.34 1.34 0 00.692 1.173l3.33 1.818a1.323 1.323 0 001.28 0l3.33-1.818a1.34 1.34 0 00.693-1.173V7.783L7.276 9.982a1.323 1.323 0 01-1.28 0zM5.997 1.35L.382 4.413a.67.67 0 000 1.172L5.997 8.65a1.323 1.323 0 001.279 0l5.355-2.924v3.937a.666.666 0 001.332 0v-4.27a.67.67 0 00-.346-.586L7.276 1.35a1.359 1.359 0 00-1.28 0z" }) })));
}
exports.default = SolidTraining;
