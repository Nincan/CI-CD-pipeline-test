"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidUserCancel(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidUserCancel" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "5.673", cy: "2.528", r: "2.477" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M5.748 10.768a4.181 4.181 0 01.31-1.6 4.1 4.1 0 012.28-2.27 3.711 3.711 0 01.47-.16 4.378 4.378 0 00-2.82-1.03h-.63a4.475 4.475 0 00-4.47 4.47v2.28a.67.67 0 00.67.67h4.92c-.01-.01-.01-.02-.02-.03a4.125 4.125 0 01-.71-2.33z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M12.868 9.548a3.177 3.177 0 00-4.15-1.73 3.315 3.315 0 00-1.04.69 3.151 3.151 0 00-.69 1.04 3.185 3.185 0 003.56 4.34 3.244 3.244 0 001.63-.87 3.19 3.19 0 00.69-3.47zm-1.71 1.74a.495.495 0 010 .71.52.52 0 01-.71 0l-.52-.53-.52.53a.52.52 0 01-.71 0 .513.513 0 010-.71l.52-.52-.52-.52a.513.513 0 010-.71.495.495 0 01.71 0l.52.52.52-.52a.502.502 0 11.71.71l-.52.52z" }, void 0)] }), void 0));
}
exports.default = SolidUserCancel;
