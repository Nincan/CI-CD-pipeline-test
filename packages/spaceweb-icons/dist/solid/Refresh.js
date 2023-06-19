"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidRefresh(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidRefresh" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.73 2.265A6.665 6.665 0 006.296.328a6.707 6.707 0 106.74 9.557.84.84 0 00-.754-1.207.816.816 0 00-.738.444 5.026 5.026 0 11-4.552-7.15 4.958 4.958 0 013.538 1.492L9.265 4.729a.838.838 0 00.587 1.434h3.01a.84.84 0 00.837-.838v-3.01a.84.84 0 00-1.433-.595z" }) })));
}
exports.default = SolidRefresh;
